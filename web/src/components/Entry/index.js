import React from 'react';

export default ({ data, isLast, _viewEntry, id }) => (
  <section>
    <h4>{data.title}</h4>
    <p>{data.ref_author} ({data.ref_year})</p>

    <button
      className="button button--primary"
      onClick={() => { _viewEntry(id) }}>
      Ver detalhes
    </button>

    { !isLast && <hr /> }
  </section>
)
