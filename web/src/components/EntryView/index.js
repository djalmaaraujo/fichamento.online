import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

import './index.css';
import Auth from '../../utils/Auth';
import ApiService from '../../utils/ApiService';
import Fields from '../../utils/Fields';
import Spinner from '../Spinner'

class EntryView extends Component {
  state = { entry: {}, loaded: false }

  componentWillMount() {
    if (!Auth.isLogged()) {
      return this.setState({ redirectTo: '/' });
    }

    const id = this.props.match.params.id

    ApiService.search().then((results) => {
      this.setState({entry: results[id], loaded: true})
    })
  }

  _renderCommonField(entry, key, i) {
    if (!Fields.common[key]) return;

    return (
      <li key={i}><strong>{ Fields.common[key] }:</strong> { entry[key] }</li>
    )
  }

  render() {
    const entry = this.state.entry

    if (this.state.redirectTo)
      return (<Redirect to={{ pathname: this.state.redirectTo }}/>);

    if (!this.state.loaded)
      return <Spinner />

    return (
      <section className="card card--primary card--example">
        <header className="card__header">
          <h4>{entry.title}</h4>
        </header>

        <div className="card__content">
          <hr />
          <h5>Informações Gerais:</h5>

          <ul>
            { Object.keys(entry).map((key, i) => {
              return this._renderCommonField(entry, key, i)
            }) }
          </ul>

          <br />

          <hr />
          <h5>Metodologia</h5>

          <table className="table">
            <tbody>
              <tr>
                <td>Amostra</td>
                <td>{ (entry.methodology && entry.methodology.hasOwnProperty('sample')) ? entry.methodology['sample'] : '' }</td>
              </tr>

              <tr>
                <td>Instrumento de Coleta de dados</td>
                <td>{ (entry.methodology && entry.methodology.hasOwnProperty('data_collect')) ? entry.methodology['data_collect'] : '' }</td>
              </tr>


              <tr>
                <td>Análise dos dados</td>
                <td>{ (entry.methodology && entry.methodology.hasOwnProperty('data_analysis')) ? entry.methodology['data_analysis'] : '' }</td>
              </tr>
            </tbody>
          </table>

          <br />

          <hr />
          <h5>Meus Comentários</h5>
          <p>{ (entry.hasOwnProperty('my_comments')) ? entry['my_comments'] : '' }</p>

          <br />

          <hr />
          <h5>Resultados / Considerações Finais</h5>
          <p>{ (entry.hasOwnProperty('results')) ? entry['results'] : '' }</p>

          <hr />

          <blockquote className="blockquote--primary backquote--bg"><p><em>Este fichamento foi criado por Rarissa Lira em 27/08/2017.</em></p></blockquote>

          <p>Link direto: <a href="https://fichamento.online/1234">https://fichamento.online/1234</a></p>

        </div>
      </section>
    )
  }
}

export default EntryView
