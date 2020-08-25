import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Datepicker from './Datepicker';
import DateRange from './DateRange';
function App() {
  return (
    <div className="App">
      <h1>My Calendar</h1>
      <DateRange />
      <Datepicker />
    </div>
  );
}

export default App;
