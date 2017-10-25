import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Auth from '../../utils/Auth'

class Logout extends Component {
  state = {to: false}

  componentWillMount() {
    try {
      Auth.logout()
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return <Redirect to={{pathname: '/'}} />
  }
}

export default Logout
