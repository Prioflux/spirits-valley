// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const request = require('then-request')

const WEBHOOK_URL = process.env.WEBHOOK_URL

const handler = (event) => {
  const body = JSON.parse(event.body)
  const { action } = body

  try {
    buildProject()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Event processed from action ${action}`,
      }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

const buildProject = async () => {
  const res = await request('POST', WEBHOOK_URL)
  res.getBody()
}

module.exports = { handler }
