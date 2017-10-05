import React, { Component } from 'react';
import { Default } from './style';

class Card extends Component {
  render() {
    return (
      <Default>
        {this.props.children}
      </Default>
    );
  }
}

export default Card;
