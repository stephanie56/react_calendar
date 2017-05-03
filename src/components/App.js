import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  constructor(){
    super();
    this.state={
      events:[
        {
          id: 1,
          date: "05/21/2017",
          startTime: "10:00",
          endTime: "15:00",
          title: "Stephanie's Birthday",
          detail: "Celebrating Steph's big day with gangs in a fun karaoke night",
        },
        {
          id: 2,
          date: "03/24/2017",
          startTime: "10:00",
          endTime: "23:00",
          title: "Someone Else's Birthday",
          detail: "Heyyyy yo guess who's this birthday? shhhhh... ",
        }
      ],
    }
  };

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
