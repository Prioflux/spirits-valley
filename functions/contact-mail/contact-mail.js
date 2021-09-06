require('dotenv').config()
const sgMail = require('@sendgrid/mail')

const { SG_API_KEY, COMPANY_NAME, COMPANY_EMAIL_ADDRESS } = process.env
sgMail.setApiKey(SG_API_KEY)

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      Allow: 'POST',
    }
  }

  const data = JSON.parse(event.body)

  let valid = false

  if(data.bookTour) {
    if(data.email && data.tour.guests > 0 && data.tour.date) {
      valid = true
    }
  } else if(data.message && data.email) {
      valid = true
    }

  if (!valid) {
    return { statusCode: 422, body: 'Email and message are required.' }
  }

  const phone = data.phone ? `<p><b>Telefoon: </b>${data.phone}</p>` : ''
  const bookTour = data.bookTour ? 
  `<p><b>Rondleiding geboekt:</b> Ja</p>
  <p><b>Aantal bezoekers:</b> ${data.tour.guests}</p>
  <p><b>Gewenste bezoekdatum:</b> ${new Date(data.tour.date).toLocaleDateString('nl')}</p>`
  : '<p><b>Rondleiding geboekt:</b> Nee</p>'
  const bookTourMsg = data.bookTour ? '<p>De datum van bezoek is <b>nog niet definitief</b>, de bezoeker moet nog gecontacteerd worden om deze datum te bevestigen.</p>' : ''
  const bookTourConfirmation = data.bookTour ? '<p>De datum van bezoek is <b>nog niet definitief</b>, wij zullen u contacteren om deze datum te bevestigen.</p>' : ''
  const message = data.message ? `<h4><b>Bericht:</b></h4>
    <p style="border-left: 2px solid lightgrey; padding-left:5px; white-space:pre-line;">${ data.message }</p>` : ''

  const msg = {
    statusCode: 200,
    to: `${COMPANY_NAME} <${COMPANY_EMAIL_ADDRESS}>`,
    from: `${COMPANY_NAME} <${COMPANY_EMAIL_ADDRESS}>`,
    replyTo: data.email,
    subject: `Nieuw bericht van ${data.email} op thespiritsvalley.com`,
    html: `<b>Email: </b>${data.email}
    ${phone}
    ${bookTour}
    ${bookTourMsg}
    <p><b>Verzonden op ${new Date().toLocaleString('nl')}</b></p>
    ${message}`,
  }

  const confirmation = {
    statusCode: 200,
    to: data.email,
    from: `${COMPANY_NAME} <${COMPANY_EMAIL_ADDRESS}>`,
    subject: "Bericht succesvol ontvangen",
    html: `<h4><b>Bericht ontvangen</b></h4>
      <p>Bedankt voor je bericht.</p>
      <p>We hebben het bericht succesvol ontvangen bij The Spirits Valley en zullen je zo snel mogelijk contacteren voor verdere opvolging.</p>
      ${bookTour}
      ${bookTourConfirmation}
      ${message}`,
  }

  try {
    await sgMail.send(msg)
    await sgMail.send(confirmation)

    return {
      statusCode: 200,
      body: 'Message sent successfully',
    }
  } catch (error) {
    return {
      statusCode: 422,
      body: `Error: ${error}`,
    }
  }
}

module.exports = { handler }
