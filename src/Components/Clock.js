import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
   
  componentDidMount(){
      this.clock = setInterval(() => this.tick(),1000);
  }
  componentWillMount(){
      clearInterval(this.clock);
  }
  render() {
    return (
      <div className="clock-container">
        <h1 class="clock-header">Simple Clock App</h1>

        <div class="local-time">
          It is <span class = "__time">{this.state.date.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }
}
export default Clock;
