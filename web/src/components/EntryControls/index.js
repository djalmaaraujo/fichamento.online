import React, { Component } from 'react';
import ApiService from '../../utils/ApiService';

class EntryControls extends Component {
  _deleteAndRedirect() {
    ApiService.deleteEntry(this.props.entry).then(() => window.location.href = '/')
  }

  render() {
    if (this.props.entry.user_id !== ApiService.me().id) {
      return null
    }

    return (
      <section>
        <br />
        <br />

        <div className="card card--shadow">
          <h4>Opções ao autor</h4>
          <p>Você pode apagar ou alterar o seu fichamento</p>
          <button type="button" className="button button--bad" onClick={this._deleteAndRedirect.bind(this)}>Apagar Fichamento</button>
          { false && <button type="button" className="button button--warn">Alterar Fichamento</button> }
        </div>
      </section>
    )
  }
}

export default EntryControls
