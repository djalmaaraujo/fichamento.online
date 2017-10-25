import React from 'react';

export default (props) => (
  <div className="alert" role="alert">
    <h4>Oops!</h4>
    <p>Nenhum fichamento encontrado em sua conta. Deseja criar um?</p>
    <hr />
    <button className="button button--primary" onClick={props._newEntry}>Criar um fichamento</button>
  </div>
)
