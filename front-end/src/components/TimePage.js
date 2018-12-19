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

class Time extends Component {
  
   state = {
    time: {},
    seconds: 5,
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

  componentDidMount(props) {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.countDown()
    console.log()
  }

  startTimer = () => {
      socket.emit('setTime', this.state.timer)
  }

  countDown = () => {
    let seconds = this.state.seconds - 1
    socket.on('time', () => {
      setInterval(() => {
        this.setState({
          time: this.secondsToTime(this.state.seconds - 1),
          seconds: this.state.seconds - 1,
        })
      }, 1000)
    })
    if (this.state.time === 0) {
      socket.on('time', () => {
        clearInterval(this.state.time);
      })
    }
  }

  stopTimer() {
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
            </div>
          </div>
        </div>
      </Bg>
    );
  }
}

export default Time;