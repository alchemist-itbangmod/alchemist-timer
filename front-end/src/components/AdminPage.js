import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../core/ParallaxBtn';

const Bg = styled.div`
  max-height:100vh;
	height:100vh;
	background-color:#F7A64A;
`

const Font = styled.h1`
  font-size:120px;
`

class Admin extends Component {

  state = {
    time: {},
    seconds: 3600,
    timer: 0,
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer = () => {
    if (this.state.timer === 0 && this.state.seconds > 0) {
      this.state.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.state.timer);
    }
  }

  stopTimer(){
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <Bg className="align-items-center d-flex justify-content-center">
        <div className="container d-flex justify-content-center ">
          <div className="row ">
            <div className="col-12">
              <Font>h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}</Font>
            </div>
            <div className="col-12  d-flex justify-content-center ">
              <button className="btn btn-primary" onClick={() => this.startTimer()}>Start</button>
              <button onClick={() => this.stopTimer()}>Stop</button>
            </div>
          </div>
        </div>
      </Bg>
    );
  }
}

export default Admin;