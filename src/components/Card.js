import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Default } from './style';

class Card extends Component {
  render() {
    return (
      <Default noPadding={this.props.noPadding} noMargin={this.props.noMargin} full={this.props.full}>
        {this.props.children}
      </Default>
    );
  }
}

/**
 * React Component defaultProps
 */
Card.defaultProps = {
  noPadding: false,
  noMargin: false,
  full: false
};

/**
 * React Component propTypes
 */
Card.propTypes = {
  noPadding: PropTypes.bool,
  noMargin: PropTypes.bool,
  full: PropTypes.bool,
};

export default Card;
