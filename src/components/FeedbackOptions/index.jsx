import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object,
    onClick: PropTypes.func,
  };

  handlClick = evt => {
    const name = evt.target.textContent.toLowerCase();
    this.props.onLeaveFeedback(name);
  };

  render() {
    return (
      <div className={css.container}>
        <button className={css.btn} onClick={this.handlClick}>
          Good
        </button>
        <button className={css.btn} onClick={this.handlClick}>
          Neutral
        </button>
        <button className={css.btn} onClick={this.handlClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
