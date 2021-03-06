import React, { Component } from 'react';
import EventTitle from './EventTitle';
import EventDetail from './EventDetail';

class EventView extends Component {

  render() {
    const btn = "+";
    return (
      <div className="Event">
        <EventTitle
          title={this.props.title}
          date={this.props.date}
          startTime={this.props.startTime}
          endTime={this.props.endTime}
        />
        <button>{ btn }</button>
        <EventDetail
          detail={this.props.detail}
        />
        <button>Read More</button>
      </div>
    );
  }
}

export default EventView;
