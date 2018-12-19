import React, { Component } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client'

const Bg = styled.div`
  max-height:100vh;
	height:100vh;
	background-color:#F7A64A;
`

const Font = styled.h1`
  font-size:120px;
`
const socket = socketIOClient('http://localhost:9000')


class Admin extends Component {

  state = {
    time: {},
    seconds: 5,
    timer: 0,
    alert : null,
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
    this.countDown()
  }

  startTimer = () => {
    if (this.state.timer === 0 && this.state.seconds > 0) {
      socket.emit('setTime', this.state.seconds)
    }
  }

  countDown = () => {
    // let seconds = this.state.seconds - 1
    socket.on('time', () => {
      setInterval(() => {
        this.setState({
          time: this.secondsToTime(this.state.seconds - 1),
          seconds: this.state.seconds - 1,
        })
      }, 1000)
    })
  }

  stopTimer() {
  }

 


  render() {
    return (
      <Bg className="align-items-center d-flex justify-content-center">
        <div className="container d-flex justify-content-center ">
          <div className="row ">
            <div className="col-12">
            <p time={this.seconds}>time  : {this.seconds}</p>
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