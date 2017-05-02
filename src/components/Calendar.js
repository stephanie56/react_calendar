import React, { Component } from 'react';
import DateView from './DateView';
import EventView from './EventView';

class Calendar extends Component {

  render() {
    return (
      <div className="Calendar">
        <DateView
          date={this.props.date}
        />
        <EventView
          title={this.props.title}
          detail={this.props.detail}
        />
      </div>
    );
  }
}

export default Calendar;
