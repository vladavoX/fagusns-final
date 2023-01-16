import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { firstname, lastname, company, email, phone, subject, message } =
    req.body
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: `${firstname} ${lastname} vam je poslao/la poruku. Kompanija: ${company}`,
    html: `
      <h4>Ime i prezime: ${firstname} ${lastname}\nEmail: ${email}\nTelefon: ${phone}\nNaslov: ${subject}\nPoruka: ${message}</h4>
      <p>${message}</p>
    `,
  }

  try {
    await sgMail.send(msg)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
    res.status(400).send('Message not sent.')
  }
}
