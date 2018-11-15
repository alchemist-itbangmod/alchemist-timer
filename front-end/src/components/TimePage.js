import React, { Component } from 'react';
import styled from 'styled-components';


const Bg = styled.div`
  max-height:100vh;
	height:100vh;
	background-color:#F7A64A;
`
class Time extends Component {
  state = {
    time: 10,
  }

  start() {
    this.interval = setInterval(() => this.setState({
      time : this.state.time - 1,
    }), 1000);
  }

  stop() {
    clearInterval(this.interval);
    return 0;
  }

  render() {
    return (
      <Bg>
        Time : {this.state.time === 0 ? this.stop():this.state.time}
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
      </Bg>
    );
  }
}

export default Time;