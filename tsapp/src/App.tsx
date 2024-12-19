import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  let mathsMarks:number=55;

  return (
    <div className="App">
       <h1><ins>Player Details</ins></h1>
     <Player name="Dhoni" numberOfCenturies={42} numberOfHalfCenturis={32} nationality='Indian'></Player>
     <hr></hr>
     <Player name="Virat Kohli" numberOfCenturies={77} numberOfHalfCenturis={89} nationality='Indian'></Player>
     <hr></hr>
     <Player name="Sachin" numberOfCenturies={100} numberOfHalfCenturis={88} nationality='Indian'></Player>
     <hr></hr>
     <Player name="David Miller" numberOfCenturies={43} numberOfHalfCenturis={64} nationality='South Africa'></Player>
    </div>
  );
}

export default App;
