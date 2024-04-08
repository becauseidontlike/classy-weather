import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    console.log(this);
    this.setState((currentState) => {
      return { count: currentState.count - 1 };
    });

    //sets value straight to 10
    // this.setState({ count: 10 });
  }

  handleIncrement() {
    this.setState((currentState) => {
      return { count: currentState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 20 2023");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
