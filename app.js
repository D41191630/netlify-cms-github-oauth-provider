require('dotenv').config({ silent: true })
import express from 'express'
import { auth, callback, success, index } from 'C:/Users/natha_yjifvqj/.netlify/Angular_Project_Test_CMS-2/netlify-cms-github-oauth-provider/index.js'
const port = process.env.PORT || 3000

const app = express()

// Initial page redirecting to Github
app.get('/auth', auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/callback', callback)

app.get('/success', success)
app.get('/', index)

app.listen(port, () => {
  console.log("Netlify CMS OAuth provider listening on port " + port)
})
