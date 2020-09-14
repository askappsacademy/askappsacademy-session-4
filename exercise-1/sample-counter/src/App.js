import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  static propTypes = { incrementAmount: PropTypes.number };

  static defaultProps = { incrementAmount: 1 };

  constructor(props) {
    super(props);
    //Set up initial state for count
  }

  resetCount = () => {
    //Update state to reset count
  };

  incrementCount = () => {
    //Update state when count increased by incrementAmount
  };

  render() {
    return (
        <div className="counter">
          <h1>How many?</h1>
          <button onClick={this.resetCount}>Reset</button>
          <span>Display count in here</span>
          <button onClick={this.incrementCount}>
            +{this.props.incrementAmount}
          </button>
        </div>
    );
  }
}

export default App;
