import React, { Component } from 'react';

class EventTitle extends Component {

  render() {
    return (
      <div className="Title">
        <h2>{this.props.title}</h2>
        <h3>{this.props.date} | {this.props.startTime} - {this.props.endTime}</h3>
      </div>
    );
  }
}

export default EventTitle;
