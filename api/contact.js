const recipientEmail = 'Jonas.Brodersen@Live.dk'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, need, message } = request.body || {}

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Navn, email og besked er påkrævet.' })
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Mail service is not configured.' })
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Bifrostsolutions <onboarding@resend.dev>'

  const emailBody = `
Ny henvendelse fra Bifrostsolutions.dk

Navn: ${name}
Email: ${email}
Telefon: ${phone || 'Ikke angivet'}
Behov: ${need || 'Ikke angivet'}

Besked:
${message}
  `.trim()

  const mailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipientEmail,
      reply_to: email,
      subject: `Ny henvendelse fra ${name}`,
      text: emailBody,
    }),
  })

  if (!mailResponse.ok) {
    return response.status(502).json({ error: 'Mail could not be sent.' })
  }

  return response.status(200).json({ ok: true })
}
