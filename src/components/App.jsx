import React, { Component } from 'react';

import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGoodPoint = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralPoint = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadPoint = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.addGoodPoint}>Good</button>
          <button onClick={this.addNeutralPoint}>Neutral</button>
          <button onClick={this.addBadPoint}>Bad</button>
        </div>
        <p>Statistics</p>
        <div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      </div>
    );
  }
}

export default App;
