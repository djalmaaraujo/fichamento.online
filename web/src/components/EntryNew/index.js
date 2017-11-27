import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Types from '../../utils/entry/Types'
import ApiService from '../../utils/ApiService'

import './index.css'

class EntryNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Meu novo style',
      ref_author: 'Djalma Araujo',
      ref_year: '2017',
      ref_type: 'artigo',
      ref_country: 'Brasil',
      ref_city: 'Recife',
      ref_translate: 'Herbert Richards',
      ref_editor: 'Pragma',
      ref_pages: '1, 2',
      ref_volumn: '2',
      ref_edition: '10',
      my_comments: "Eu acho que ta muito legal.... \n e pa e brei.",
      methodology_sample: 'Realism grenade Legba dead paranoid singularity skyscraper alcohol sub-orbital BASE jump city into shoes Shibuya engine boat. Weathered free-market franchise fetishism convenience store car footage order-flow shanty town kanji market into. Rebar nano-Tokyo render-farm warehouse augmented reality computer sensory Shibuya math-lights. Post-lights tank-traps augmented reality meta-drone garage boat shoes pen corporation skyscraper motion ablative sentient. ',
      methodology_data_collect: 'Jeans tanto corporation dome shanty town assault smart-military-grade nodality woman receding bridge Shibuya. Drugs spook motion shrine DIY construct camera BASE jump otaku man office. Artisanal weathered fluidity face forwards tower receding youtube film geodesic carbon cyber-industrial grade saturation point. Tanto concrete ablative urban alcohol render-farm realism bomb papier-mache bicycle. Bicycle warehouse wristwatch cartel shanty town city tiger-team singularity jeans drugs digital spook nodality chrome smart-systema. Systema-space vehicle advert meta-neural youtube. Shanty town office fluidity A.I. voodoo god camera RAF semiotics knife grenade geodesic Kowloon 8-bit gang. ',
      methodology_data_analysis: 'Marketing sub-orbital rain Shibuya bicycle-ware warehouse. Towards neon ablative cyber-3D-printed rebar singularity pen carbon wristwatch systemic sentient construct monofilament. Nodal point digital saturation point 8-bit city Kowloon towards shanty town cyber-drone pistol smart-otaku. Narrative girl assault systema corrupted shoes 3D-printed rain weathered katana silent concrete face forwards savant. ',
      thematic: 'A tematica é tal e qual'
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

  cancel() {
    this.setState({redirectTo: '/fichamentos'})
  }

  handleSubmit(event) {
    event.preventDefault()

    ApiService.add(event, this.state)
      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        alert('Não foi possível adicionar no momento, favor atualizar a página atual e tentar novamente')
      })
  }

  render() {
    if (this.state.redirectTo) {
      return (<Redirect to={{pathname: this.state.redirectTo}}/>)
    }

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
                  required
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange} />
              </label>

              <label>
                Autor:
                <input
                  type="text"
                  required
                  name="ref_author"
                  value={this.state.ref_author}
                  onChange={this.handleChange} />
              </label>

              <label>
                Ano:
                <input
                  type="text"
                  required
                  name="ref_year"
                  value={this.state.ref_year}
                  onChange={this.handleChange} />
              </label>

              <label>
                Tipo de Obra:
                <select
                required
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
                  required
                  name="ref_country"
                  value={this.state.ref_country}
                  onChange={this.handleChange} />
              </label>

              <label>
                Cidade:
                <input
                  type="text"
                  required
                  name="ref_city"
                  value={this.state.ref_city}
                  onChange={this.handleChange} />
              </label>

              <label>
                Tradução:
                <input
                  type="text"
                  required
                  name="ref_translate"
                  value={this.state.ref_translate}
                  onChange={this.handleChange} />
              </label>

              <label>
                Editora:
                <input
                  type="text"
                  required
                  name="ref_editor"
                  value={this.state.ref_editor}
                  onChange={this.handleChange} />
              </label>

              <label>
                Páginas:
                <input
                  type="text"
                  required
                  name="ref_pages"
                  value={this.state.ref_pages}
                  onChange={this.handleChange} />
              </label>

              <label>
                Volume:
                <input
                  type="text"
                  required
                  name="ref_volumn"
                  value={this.state.ref_volumn}
                  onChange={this.handleChange} />
              </label>

              <label>
                Edição:
                <input
                  type="text"
                  required
                  name="ref_edition"
                  value={this.state.ref_edition}
                  onChange={this.handleChange} />
              </label>

              <label>
                Temática:
                <input
                  type="text"
                  required
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
                  required
                  name="methodology_sample"></textarea>
              </label>

              <label>
                Instrumento de Coleta de dados:
                <textarea
                  value={this.state.methodology_data_collect}
                  onChange={this.handleChange}
                  required
                  name="methodology_data_collect"></textarea>
              </label>

              <label>
                Análise dos dados:
                <textarea
                  value={this.state.methodology_data_analysis}
                  onChange={this.handleChange}
                  required
                  name="methodology_data_analysis"></textarea>
              </label>
            </fieldset>

            <fieldset>
              <legend>Resultados / Considerações Finais</legend>

              <label>
                <textarea
                value={this.state.my_comments}
                onChange={this.handleChange}
                required
                name="my_comments"></textarea>
              </label>
            </fieldset>

            <br />

            <button
              className="button"
              onClick={this.cancel.bind(this) }>
              Cancelar</button>

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
