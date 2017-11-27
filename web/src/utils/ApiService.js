/*global location, WeDeployClient, WeDeployDataClient*/
/*eslint no-restricted-globals: ["error", "location"]*/

import uuid from './GuidGenerator'

const ApiService = {
  me() {
    return WeDeployClient.currentUser
  },

  search() {
    return new Promise((resolve, reject) => {
      if (!WeDeployClient.currentUser) {
        return reject(new Error('invalid session'))
      }

      WeDeployDataClient.get('entries')
        .then((entries) => resolve(entries))
        .catch((err) => reject(new Error('no user found')))
    })
  },

  add(event, data) {
    return new Promise((resolve, reject) => {
      if (!WeDeployClient.currentUser) {
        return reject(new Error('invalid session'))
      }

      data.id = uuid()
      data.created_at = new Date().getTime()
      data.user_id = WeDeployClient.currentUser.id

      WeDeployDataClient.create('entries', [data])
        .then((entry) => resolve(entry))
        .catch((error) => reject(new Error('no user found')))
    })
  },

  deleteEntry(entry) {
    return new Promise((resolve, reject) => {
      if (!WeDeployClient.currentUser || (entry.user_id !== WeDeployClient.currentUser.id)) {
        return reject(new Error('invalid session'))
      }

      WeDeployDataClient.delete(`entries/${entry.id}`)
    })
  }
}

export default ApiService
