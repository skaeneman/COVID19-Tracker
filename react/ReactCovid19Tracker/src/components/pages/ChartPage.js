import React, { Component } from 'react';
import StoppedEvictionsChart from '../charts/StoppedEvictionsChart';

export default class ChartPage extends Component {
  render() {
    return (
      <div>
        <StoppedEvictionsChart />
      </div>
    )
  }
}
