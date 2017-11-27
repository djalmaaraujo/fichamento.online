/*global location, WeDeployClient*/
/*eslint no-restricted-globals: ["error", "location"]*/

const Auth = {
  isLogged() {
    return WeDeployClient.currentUser !== null
  },

  logout() {
    return WeDeployClient.signOut()
  },

  login(params) {
    localStorage.setItem('pnp_auth_token', params.access_token)
    localStorage.setItem('pnp_auth_params', JSON.stringify(params))
  },

  me() {
    return JSON.parse(localStorage.getItem('pnp_auth_params')) || {}
  },

  getEntryUser(userId) {
    return WeDeployClient.getUser(userId)
  },

  token() {
    return localStorage.getItem('pnp_auth_token')
  }
}

export default Auth
