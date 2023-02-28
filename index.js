import { AuthorizationCode } from 'simple-oauth2'
import authMiddleWareInit from 'C:/Users/natha_yjifvqj/.netlify/Angular_Project_Test_CMS-2/netlify-cms-github-oauth-provider/auth.js'
import callbackMiddleWareInit from 'C:/Users/natha_yjifvqj/.netlify/Angular_Project_Test_CMS-2/netlify-cms-github-oauth-provider/callback'
const oauthProvider = process.env.OAUTH_PROVIDER || 'github'
const loginAuthTarget = process.env.AUTH_TARGET || '_self'

const config = {
  client: {
    id: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET
  },
  auth: {
    // Supply GIT_HOSTNAME for enterprise github installs.
    tokenHost: process.env.GIT_HOSTNAME || 'https://github.com',
    tokenPath: process.env.OAUTH_TOKEN_PATH || '/login/oauth/access_token',
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || '/login/oauth/authorize'
  }
}

const oauth2 = new AuthorizationCode(config)

function indexMiddleWare (req, res) {
  res.send(`Hello<br>
    <a href="/auth" target="${loginAuthTarget}">
      Log in with ${oauthProvider.toUpperCase()}
    </a>`)
}

export const auth = authMiddleWareInit(oauth2)
export const callback = callbackMiddleWareInit(oauth2, oauthProvider)
export function success(req, res) { res.send('') }
export const index = indexMiddleWare
