import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { firstname, lastname, email, phone, subject, message } = req.body
  const msg = {
    to: 'valeksicbot@gmail.com',
    from: 'valeksicbot@gmail.com',
    subject: `${firstname} ${lastname} vam je poslao/la poruku`,
    text: `Ime i prezime: ${firstname} ${lastname}\nEmail: ${email}\nTelefon: ${phone}\nNaslov: ${subject}\nPoruka: ${message}`,
    html: `
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
