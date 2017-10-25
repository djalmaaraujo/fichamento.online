import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    return (
      <div>
        <p className="text-center"><i className="fa fa-spinner fa-pulse fa-spin"></i> {this.props.text || 'Carregando...'}</p>
      </div>
    );
  }
}

export default Spinner;
