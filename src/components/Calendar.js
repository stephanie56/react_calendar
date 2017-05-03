import React, { Component } from 'react';
import DateView from './DateView';
import EventView from './EventView';

class Calendar extends Component {

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = this.props.date.split('/');
    const formatted_month = months[parseInt(date[0], 10) - 1];
    const formatted_day = parseInt(date[1], 10);
    const formatted_year = date[2];
    const formatted_date = formatted_month + " " + formatted_day + ", " + formatted_year;

    return (
      <div className="Calendar">
        <DateView
          month={ formatted_month }
          day={ formatted_day }
        />
        <EventView
          date={ formatted_date }
          startTime={this.props.startTime}
          endTime={this.props.endTime}
          title={this.props.title}
          detail={this.props.detail}
        />
      </div>
    );
  }
}

export default Calendar;
