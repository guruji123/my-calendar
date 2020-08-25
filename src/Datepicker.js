import React, {Component} from 'react';
import { Calendar } from 'react-date-range';

class Datepicker extends Component {
  handleSelect(date){
    console.log(date); // native Date object
  }
  render(){
    return (
      <Calendar
        date={new Date()}
        onChange={this.handleSelect}
      />
    )
  }
}

export default Datepicker;