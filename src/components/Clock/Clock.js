import { Component } from 'react';
import React from "react";
import { ClockContainer } from './Clock.styled';



export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
      this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <ClockContainer>{this.state.time}</ClockContainer>;
  }
}