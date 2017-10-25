import React from 'react';

import {
  Link
} from 'react-router-dom'

import './index.css';

export default () => (
  <div className="header">
    <div className="header__item">
      <h3>Fichamento Online</h3>
    </div>
    <div className="header__item">
      <Link to={'/fichamentos/new'}>Novo Fichamento</Link>
      <Link to={'/logout'}>Logout</Link>
    </div>
  </div>
)
