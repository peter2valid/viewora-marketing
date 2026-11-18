// Partner access requests from /partners → info@viewora.software, sent through
// Resend from our own domain (same setup as contact.post.ts).
//
// Env: RESEND_API_KEY — a Resend key with sending access for viewora.software.

import { PARTNER_AGENT_BANDS, PARTNER_PLATFORM_TYPES } from '../../utils/partnerRequest'

const TO = 'info@viewora.software'
const FROM = 'Viewora Website <hello@viewora.software>'
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/


const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;')
const oneLine = (v: unknown, max: number) => (typeof v === 'string' ? v.replace(/[\r\n]+/g, ' ').trim().slice(0, max) : '')
const text = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export default defineEventHandler(async (event) => {
  const b = await readBody(event)

  // Honeypot: real visitors never fill this. Pretend success so bots learn nothing.
  if (oneLine(b?.homepage, 200)) return { success: true }

  const company = oneLine(b?.company, 120)
  const site = oneLine(b?.site, 200)
  const platform = oneLine(b?.platform, 60)
  const agents = oneLine(b?.agents, 30)
  const name = oneLine(b?.name, 120)
  const email = oneLine(b?.email, 254)
  const phone = oneLine(b?.phone, 20).replace(/[^\d+]/g, '')
  const note = text(b?.note, 2000)
  const consent = b?.consent === true
  const consentText = oneLine(b?.consentText, 400)

  const problems: string[] = []
  if (company.length < 2) problems.push('company')
  if (name.length < 2) problems.push('name')
  if (!EMAIL_RE.test(email)) problems.push('email')
  if (phone.replace(/\D/g, '').length < 9) problems.push('phone')
  if (!(PARTNER_PLATFORM_TYPES as readonly string[]).includes(platform)) problems.push('platform')
  if (agents && !(PARTNER_AGENT_BANDS as readonly string[]).includes(agents)) problems.push('agents')
  if (site && !/^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/\S*)?$/i.test(site)) problems.push('site')
  if (!consent || !consentText) problems.push('consent')
  if (problems.length) {
    throw createError({ statusCode: 400, statusMessage: 'Some details are missing or invalid', data: { problems } })
  }

  const { resendApiKey } = useRuntimeConfig()
  if (!resendApiKey) {
    console.error('[partner-request] RESEND_API_KEY is not set')
    throw createError({ statusCode: 500, statusMessage: 'Could not send request' })
  }

  const rows: [string, string][] = [
    ['Company', company], ['Website', site || '-'], ['Platform', platform], ['Agents', agents || '-'],
    ['Contact', name], ['Email', email], ['Phone', phone], ['Note', note || '-'],
    ['Consent', `${new Date().toISOString()} - "${consentText}"`],
  ]

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}` },
      body: {
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `[Partner request] ${company} (${platform})`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
        html: rows.map(([k, v]) => `<p><strong>${k}:</strong> ${esc(v)}</p>`).join(''),
      },
    })
    return { success: true }
  } catch (error: any) {
    console.error('[partner-request] Resend send failed:', error?.data ?? error?.message ?? error)
    throw createError({ statusCode: 500, statusMessage: 'Could not send request' })
  }
})
