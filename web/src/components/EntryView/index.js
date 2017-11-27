import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

import './index.css';
import Auth from '../../utils/Auth';
import ApiService from '../../utils/ApiService';
import Fields from '../../utils/Fields';

import Spinner from '../Spinner'
import EntryControls from '../EntryControls'

class EntryView extends Component {
  state = { entry: {}, entryUser: {}, loaded: false }

  componentWillMount() {
    if (!Auth.isLogged()) {
      return this.setState({ redirectTo: '/' });
    }

    const id = this.props.match.params.id

    ApiService.search().then((results) => {
      const entry = results.find((item) => item.id.toString() === id.toString())

      if (!entry) {
        return this.setState({redirectTo: '/'})
      }

      Auth.getEntryUser(entry.user_id).then((user) => {
        entry.user = user

        this.setState({entry: entry, loaded: true})
      })
    })
  }

  _renderCommonField(entry, key, i) {
    if (!Fields.common[key]) return;

    return (
      <li key={i}><strong>{ Fields.common[key] }:</strong> { entry[key] }</li>
    )
  }

  _renderDate(time) {
    if (!time) return ''

    return new Date(time).toISOString()
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
                <td>{ entry.methodology_sample ? entry.methodology_sample : '' }</td>
              </tr>

              <tr>
                <td>Instrumento de Coleta de dados</td>
                <td>{ entry.methodology_data_collect ? entry.methodology_data_collect : '' }</td>
              </tr>


              <tr>
                <td>Análise dos dados</td>
                <td>{ entry.methodology_data_analysis ? entry.methodology_data_analysis : '' }</td>
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

          <blockquote className="blockquote--primary backquote--bg"><p><em>Este fichamento foi criado por { this.state.entry.user && this.state.entry.user.name } em { this._renderDate(entry.created_at) }.</em></p></blockquote>

          <p>Link direto: <a href={`https://www.fichamento.online/fichamentos/${entry.id}`}>https://fichamento.online/fichamentos/{ entry.id }</a></p>
        </div>

        <EntryControls entry={entry} />
      </section>
    )
  }
}

export default EntryView
