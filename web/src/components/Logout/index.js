import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Auth from '../../utils/Auth'

class Logout extends Component {
  state = {redirect: false}

  componentWillMount() {
    try {
      Auth.logout().then(() => {
        this.setState({redirect: true})
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    if (this.state.redirect)
      return <Redirect to={{pathname: '/'}} />

    return null
  }
}

export default Logout
