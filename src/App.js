import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Picks from './components/Picks';


function App(){

  const [playerPick, setPlayerPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);

  useEffect(()=>{
    generateNewPick()
  },[setPlayerPick])

  function generateNewPick() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor((Math.random()*3))];
    setComputerPick(randomChoice);
}

    return(
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <Game playerPick={playerPick} computerPick= {computerPick} score= {score} newComputerPick= {generateNewPick}></Game>
          </Route>
          <Route path="/">
            <Picks pick={setPlayerPick}></Picks>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}



export default App;
