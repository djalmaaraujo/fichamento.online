import React, { Component } from 'react'
import Types from '../../utils/entry/Types'

import './index.css'

class EntryNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      ref_author: '',
      ref_year: '',
      ref_type: '',
      ref_country: '',
      ref_city: '',
      ref_translate: '',
      ref_editor: '',
      ref_pages: '',
      ref_volumn: '',
      ref_edition: '',
      my_comments: '',
      methodology_sample: '',
      methodology_data_collect: '',
      methodology_data_analysis: '',
      thematic: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state)
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <section
        className="card card--primary card--example">
        <header
          className="card__header">
          <h4>Novo Fichamento</h4>
        </header>

        <div
          className="card__content">
          <br />
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Informações de referência</legend>

              <label>
                Título:
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange} />
              </label>

              <label>
                Autor:
                <input
                  type="text"
                  name="ref_author"
                  value={this.state.ref_author}
                  onChange={this.handleChange} />
              </label>

              <label>
                Ano:
                <input
                  type="text"
                  name="ref_year"
                  value={this.state.ref_year}
                  onChange={this.handleChange} />
              </label>

              <label>
                Tipo de Obra:
                <select
                  name="ref_type"
                  value={this.state.ref_type}
                  onChange={this.handleChange}>
                  { Types.map((type, i) => { return <option key={i}
                    value={type.id}>{type.name}</option> }) }
                </select>
              </label>

              <label>
                País:
                <input
                  type="text"
                  name="ref_country"
                  value={this.state.ref_country}
                  onChange={this.handleChange} />
              </label>

              <label>
                Cidade:
                <input
                  type="text"
                  name="ref_city"
                  value={this.state.ref_city}
                  onChange={this.handleChange} />
              </label>

              <label>
                Tradução:
                <input
                  type="text"
                  name="ref_translate"
                  value={this.state.ref_translate}
                  onChange={this.handleChange} />
              </label>

              <label>
                Editora:
                <input
                  type="text"
                  name="ref_editor"
                  value={this.state.ref_editor}
                  onChange={this.handleChange} />
              </label>

              <label>
                Páginas:
                <input
                  type="text"
                  name="ref_pages"
                  value={this.state.ref_pages}
                  onChange={this.handleChange} />
              </label>

              <label>
                Volume:
                <input
                  type="text"
                  name="ref_volumn"
                  value={this.state.ref_volumn}
                  onChange={this.handleChange} />
              </label>

              <label>
                Edição:
                <input
                  type="text"
                  name="ref_edition"
                  value={this.state.ref_edition}
                  onChange={this.handleChange} />
              </label>

              <label>
                Temática:
                <input
                  type="text"
                  name="thematic"
                  value={this.state.thematic}
                  onChange={this.handleChange} />
              </label>
            </fieldset>

            <fieldset>
              <legend>Metodologia</legend>

              <label>
                Amostra:
                <textarea
                  value={this.state.methodology_sample}
                  onChange={this.handleChange}
                  name="methodology_sample"></textarea>
              </label>

              <label>
                Instrumento de Coleta de dados:
                <textarea
                  value={this.state.methodology_data_collect}
                  onChange={this.handleChange}
                  name="methodology_data_collect"></textarea>
              </label>

              <label>
                Análise dos dados:
                <textarea
                  value={this.state.methodology_data_analysis}
                  onChange={this.handleChange}
                  name="methodology_data_analysis"></textarea>
              </label>
            </fieldset>

            <fieldset>
              <legend>Resultados / Considerações Finais</legend>

              <label>
                <textarea
                value={this.state.value}
                onChange={this.handleChange}
                name="my_comments"></textarea>
              </label>
            </fieldset>

            <hr />

            <button className="button">Cancelar</button>

            <button
              type="submit"
              className="button button--inverted">Salvar</button>
          </form>

        </div>
      </section>
    )
  }
}

export default EntryNew
