import React, { Component } from 'react';

class EventTitle extends Component {

  render() {
    const startTime = this.props.startTime.split(":");
    const startHour = parseInt(startTime[0], 10);
    const endTime = this.props.endTime.split(":");
    const endHour = parseInt(endTime[0], 10);

    return (
      <div className="Title">
        <h2>{this.props.title}</h2>
        <h3>{this.props.date} |
            {startHour > 12 ? startHour - 12 : startHour}:{ startTime[1] } { startHour <= 12 ? "AM" : "PM" } - 
            {endHour > 12 ? endHour - 12 : endHour}:{ endTime[1] } { endHour <= 12 ? "AM" : "PM" }
        </h3>
      </div>
    );
  }
}

export default EventTitle;
