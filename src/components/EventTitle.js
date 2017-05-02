import React, { Component } from 'react';

class EventTitle extends Component {

  render() {
    return (
      <div className="Title">
        {this.props.title}
      </div>
    );
  }
}

export default EventTitle;
