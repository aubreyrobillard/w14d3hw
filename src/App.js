import './App.css';
import { useState, useEffect } from 'react';
import Score from './components/score';
import Game from './components/game';


function App() {
  
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Score/>
      <Game/>
    </div>
  );
}

export default App;
