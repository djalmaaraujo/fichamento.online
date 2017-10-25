/*global location, WeDeployClient*/
/*eslint no-restricted-globals: ["error", "location"]*/

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './index.css';
import Auth from '../../utils/Auth';
import Spinner from '../Spinner'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {logged: false};
  }
  /**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
  _getHashParams(key) {
    const matches = window.location.hash.match(new RegExp(key+'=([^&]*)'));
    return matches ? matches[1] : null;
  }

  /**
   * Generates a random string containing numbers and letters
   * @param  {number} length The length of the string
   * @return {string} The generated string
   */
  _generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  _requestLogin() {
    var provider = new WeDeployClient.provider.Google();
    provider.setProviderScope("email");

    WeDeployClient.signInWithRedirect(provider);
  }

  componentWillMount() {
    setTimeout(() => {
      const status = Auth.isLogged();

      this.setState({ logged: status, show: (!status) ? true : false });
    }, 1000)
  }

  render() {
    if (this.state.logged) {
      return (<Redirect to={{pathname: '/fichamentos'}}/>);
    }

    if (!this.state.show) return <Spinner />;

    return (
      <div className="Login text-center">
        <p>Para acessar a ferramenta, utilize um dos meios de autenticação abaixo:</p>

        <button
          type="button"
          className="button button--ok button--google"
          onClick={this._requestLogin.bind(this)}>
          Autenticar com Google
        </button>

        &nbsp;

        <button
          type="button"
          className="button button--ok button--facebook"
          onClick={this._requestLogin.bind(this)}>
          Autenticar com Facebook
        </button>
      </div>
    );
  }
}

export default Login;
