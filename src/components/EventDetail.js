import React, { Component } from 'react';

class EventDetail  extends Component {

  render() {
    return (
      <div className="EventBody">
        {this.props.detail}
      </div>
    );
  }
}

export default EventDetail;
