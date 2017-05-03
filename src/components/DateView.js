import React, { Component } from 'react';

class DateView extends Component {

  render() {
    const month = this.props.month.slice(0,3).toUpperCase();
    return (
      <div className="Date">
        <div className="Month">
          { month }
        </div>
        <div className="Day">
          { this.props.day }
        </div>
      </div>
    );
  }
}

export default DateView;
