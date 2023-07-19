import React, { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddToState = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  handleAllStateValue = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0 && neutral === 0 && bad === 0) {
      return false;
    } else {
      return true;
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleAddToState}
          />

          <h2 className="Statisttitle">Statistics</h2>
          {this.handleAllStateValue() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
