import React, { Component } from 'react'
import {
  Redirect
} from 'react-router-dom'

import './index.css'
import ApiService from '../../utils/ApiService'
import Spinner from '../Spinner'
import Entry from '../Entry'
import NoEntriesFound from '../NoEntriesFound'

class EntryList extends Component {
  state = { entries: false, loaded: false }

  componentWillMount() {
    ApiService.search()
      .then((results) => {
        this.setState({entries: results, loaded: true})
      }).catch((error) => {
        return this.setState({ redirectTo: '/' })
      })
  }

  _newEntry() {
    this.setState({redirectTo: '/fichamentos/new'})
  }

  _viewEntry(id) {
    this.setState({redirectTo: `/fichamentos/${id}`})
  }

  _renderEntry = (item, key) => {
    return <Entry
      data={item}
      key={key}
      id={item.id}
      isLast={key === this.state.entries.length-1}
      _viewEntry={this._viewEntry.bind(this)}
    />
  }


  render() {
    const hasEntries = () => {
      return this.state.loaded && (this.state.entries && (this.state.entries.length > 0))
    }

    if (this.state.redirectTo)
      return (<Redirect to={{ pathname: this.state.redirectTo }}/>)

    return (
      <div>
        { !this.state.loaded && <Spinner /> }
        { hasEntries() && <p className="text-center">Listando <strong>{this.state.entries.length}</strong> fichamento(s)</p> }
        <div className="card__content">
          { hasEntries() && this.state.entries.map(this._renderEntry) }
          { !hasEntries() && <NoEntriesFound _newEntry={this._newEntry.bind(this)} />}
        </div>
      </div>
    )
  }
}

export default EntryList
