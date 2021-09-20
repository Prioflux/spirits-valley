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
  let totalGuests

  if(data.bookTour) {
    totalGuests = data.tour.guests_1+data.tour.guests_2+data.tour.guests_3

    if(data.email
      && data.tour.arrangement
      && (totalGuests >= 10 && totalGuests <= 25) 
      && data.tour.date 
      && data.tour.timing) {
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
  <p><b>Aantal bezoekers (onder 12 jaar):</b> ${data.tour.guests_1}</p>
  <p><b>Aantal bezoekers (van 12 tot 18 jaar):</b> ${data.tour.guests_2}</p>
  <p><b>Aantal bezoekers (18+):</b> ${data.tour.guests_3}</p>
  <p style="border-top: 1px solid black"><b>Totaal aantal personen: ${totalGuests}</b></p>
  <p><b>Totale prijs:</b>€ ${data.tour.price}</p>
  <p><b>Gewenste bezoekdatum:</b> ${new Date(data.tour.date).toLocaleDateString('nl')} - ${data.tour.timing}</p>`
  : '<p><b>Rondleiding geboekt:</b> Nee</p>'
  const bookTourMsg = data.bookTour ? '<p>De datum van bezoek is <b>nog niet definitief</b>, de bezoeker moet nog gecontacteerd worden om deze datum te bevestigen.</p>' : ''
  const bookTourPayment = data.bookTour ? `<p>De totale prijs van de rondleiding is € ${data.tour.price}.</p><p>Hiervan dient 50% overgeschreven te worden na bevestiging van de datum en de overige 50% dient overgeschreven 14 dagen voor aanvang</p>` : ''
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
      ${bookTourPayment}
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
