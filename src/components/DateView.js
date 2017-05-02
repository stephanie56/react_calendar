import React, { Component } from 'react';

class DateView extends Component {

  render() {
    return (
      <div className="Date">
        { this.props.date }
      </div>
    );
  }
}

export default DateView;
