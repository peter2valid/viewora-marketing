import nodemailer from 'nodemailer'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export default defineEventHandler(async (event) => {
  const b = await readBody(event)

  // Honeypot: real visitors never fill this. Pretend success so bots learn nothing.
  if (clean(b?.website, 200)) return { success: true }

  const name = clean(b?.name, 100)
  const phone = clean(b?.phone, 20).replace(/[^\d+]/g, '')
  const email = clean(b?.email, 120)
  const business = clean(b?.business, 120)
  const type = clean(b?.type, 40)
  const city = clean(b?.city, 80)
  const note = clean(b?.note, 1000)
  const consent = b?.consent === true
  const consentText = clean(b?.consentText, 400)

  if (name.length < 2 || phone.replace(/\D/g, '').length < 9 || !consent) {
    throw createError({ statusCode: 400, statusMessage: 'Name, phone and consent are required' })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }

  const config = useRuntimeConfig()
  const transporter = nodemailer.createTransport({
    host: config.smtpHost || 'smtp.gmail.com',
    port: parseInt(config.smtpPort || '587'),
    auth: { user: config.smtpUser, pass: config.smtpPass },
  })

  const rows: [string, string][] = [
    ['Name', name], ['Phone', phone], ['Email', email || '-'], ['Business', business || '-'],
    ['Type', type || '-'], ['City', city || '-'], ['Note', note || '-'],
    ['Consent', `${new Date().toISOString()} - "${consentText}"`],
  ]

  try {
    await transporter.sendMail({
      from: `"Viewora Demo Requests" <${config.smtpUser || 'vieworasoftware@gmail.com'}>`,
      to: 'vieworasoftware@gmail.com',
      ...(email ? { replyTo: email } : {}),
      subject: `[Demo request] ${name} (${phone})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: rows.map(([k, v]) => `<p><strong>${k}:</strong> ${esc(v)}</p>`).join(''),
    })
    return { success: true }
  } catch (e) {
    console.error('Demo request email error:', e)
    throw createError({ statusCode: 500, statusMessage: 'Could not send request' })
  }
})
