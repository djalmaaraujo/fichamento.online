import React, { Component } from 'react'

class EntryNew extends Component {
  render() {
    return (
      <section className="card card--primary card--example">
        <header className="card__header">
          <h4>Novo Fichamento</h4>
        </header>

        <div className="card__content">
          <hr />
          <h5>Informações Gerais:</h5>

          <a href="#" className="button">Cancelar</a>
          &nbsp;
          <a href="#" className="button button--inverted">Salvar</a>

        </div>
      </section>
    )
  }
}

export default EntryNew
