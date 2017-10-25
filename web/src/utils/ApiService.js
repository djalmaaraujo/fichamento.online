/*global location, WeDeployClient*/
/*eslint no-restricted-globals: ["error", "location"]*/

const ApiService = {
  search() {
    return new Promise((resolve, reject) => {
      if (!WeDeployClient.currentUser) {
        reject(new Error('invalid session'))
      }

      WeDeployClient
        .getUser(WeDeployClient.currentUser.id)
        .then((user) => {
          resolve(user.stories)
        })
        .catch((err) => {
          reject(new Error('no user found'));
        });
    });
  },
};

export default ApiService;
