import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  static propTypes = { incrementAmount: PropTypes.number };

  static defaultProps = { incrementAmount: 1 };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  resetCount = () => {
    this.setState({ count: 0 });
  };

  incrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + props.incrementAmount,
    }));
  };

  render() {
    return (
        <div className="counter">
          <h1>How many?</h1>
          <button onClick={this.resetCount}>Reset</button>
          <span>{this.state.count}</span>
          <button onClick={this.incrementCount}>
            +{this.props.incrementAmount}
          </button>
        </div>
    );
  }
}

export default App;
