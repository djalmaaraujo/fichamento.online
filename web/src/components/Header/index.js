import React from 'react';

import Auth from '../../utils/Auth';

import {
  Link
} from 'react-router-dom'

import './index.css';

export default () => (
  <div className="header">
    <div className="header__item header__item--title">
      <Link to={'/'}><h3>Fichamento Online</h3></Link>
    </div>

    <div className="header__item">
      { Auth.isLogged() && <Link to={'/fichamentos/new'}>Novo Fichamento</Link> }
      { Auth.isLogged() &&  <Link to={'/logout'}>Sair</Link> }
    </div>
  </div>
)
