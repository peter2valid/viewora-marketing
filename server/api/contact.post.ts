// Website contact form → info@viewora.software, sent through Resend from our
// own domain so it passes SPF/DKIM/DMARC. (Previously this logged into the
// old vieworasoftware@gmail.com account over SMTP.)
//
// Env: RESEND_API_KEY — a Resend key with sending access for viewora.software.

const TO = 'info@viewora.software'
const FROM = 'Viewora Website <hello@viewora.software>'

const LIMITS = { name: 120, email: 254, subject: 200, message: 5000 }
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]+$/

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

// Subjects are a single header line; strip anything that could break it.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = typeof body?.name === 'string' ? oneLine(body.name) : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const subject = typeof body?.subject === 'string' ? oneLine(body.subject) : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }
  if (!EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address' })
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || subject.length > LIMITS.subject || message.length > LIMITS.message) {
    throw createError({ statusCode: 400, statusMessage: 'Message is too long' })
  }

  const { resendApiKey } = useRuntimeConfig()
  if (!resendApiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message. Please email info@viewora.software directly.' })
  }

  const subjectLine = `[Contact Form] ${subject || 'General enquiry'}: ${name}`
  const h = { name: escapeHtml(name), email: escapeHtml(email), subject: escapeHtml(subject || '—'), message: escapeHtml(message) }

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}` },
      body: {
        from: FROM,
        to: [TO],
        reply_to: email, // "Reply" in Gmail goes straight to the visitor
        subject: subjectLine,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '—'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #3b82f6;">New Message from Viewora Contact Form</h2>
            <p><strong>Name:</strong> ${h.name}</p>
            <p><strong>Email:</strong> ${h.email}</p>
            <p><strong>Subject:</strong> ${h.subject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${h.message}</p>
          </div>
        `,
      },
    })
    return { success: true }
  } catch (error: any) {
    console.error('[contact] Resend send failed:', error?.data ?? error?.message ?? error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message. Please email info@viewora.software directly.' })
  }
})
