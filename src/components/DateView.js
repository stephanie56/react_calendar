import React, { Component } from 'react';

class DateView extends Component {

  render() {
    return (
      <div className="Date">
        <div className="Month">
          { this.props.month }
        </div>
        <div className="Day">
          { this.props.day }
        </div>
      </div>
    );
  }
}

export default DateView;
