import React, { Component } from 'react';
import Calendar from './Calendar';

class App extends Component {
  constructor(){
    super();
    this.state={
      events:[
        {
          id: 1,
          date: "May 21, 2017",
          title: "Stephanie's Birthday",
          detail: "Celebrating Steph's big day with gangs in a fun karaoke night",
        },
        {
          id: 2,
          date: "March 24, 2017",
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
