import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Picks from './components/Picks';
import lizard from './images/lizard.png';
import paper from "./images/paper.png";
import rock from "./images/rock.png";
import scissors from "./images/scissors.png";
import spock from "./images/spock.png"


function App(){

  const [playerPick, setPlayerPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);
  const choices = [
   {name:"rock", winsTo:["lizard", "scissors"], image:{rock}},
   {name:"paper", winsTo:["rock", "spock"], image:{paper}}, 
   {name:"scissors", winsTo:["paper", "lizard"], image:{scissors}},
   {name:"lizard", winsTo:["spock", "paper"], image:{lizard}}, 
   {name:"spock", winsTo:["scissors", "rock"], image:{spock}}
  ];



  useEffect(()=>{
    generateNewPick()
  },[setPlayerPick])

  function generateNewPick() {
    const randomChoice = choices[Math.floor((Math.random()*5))];
    setComputerPick(randomChoice);
}

    return(
      <BrowserRouter>
        <Switch>
          <Route path="/game">
            <Game playerPick={playerPick} computerPick= {computerPick} score= {score} newComputerPick= {generateNewPick} newScore = {setScore}></Game>
          </Route>
          <Route path="/">
            <Picks score={score} pick={setPlayerPick} choices= {choices}></Picks>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}



export default App;
