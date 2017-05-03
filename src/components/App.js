import React, { Component } from 'react';
import Calendar from './Calendar';
const db = require('../data/events');

class App extends Component {
  constructor(){
    super();
    this.state={
      events: db.events,
    };
  }

  render() {

    return (
      <div className="App">
        {
          this.state.events.map((event, idx) => {
            return(
              <Calendar
                date={event.date}
                title={event.title}
                detail={event.detail}
                startTime={event.startTime}
                endTime={event.endTime}
                key={idx}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
