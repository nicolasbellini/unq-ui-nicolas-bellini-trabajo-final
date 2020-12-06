import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Picks from './components/Picks';


function App(){

  const [playerPick, setPlayerPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);  
  const choices = [
   {name:"rock", winsTo:["lizard", "scissors"], image:require('./images/rock.png')},
   {name:"paper", winsTo:["rock", "spock"], image:require('./images/paper.png')}, 
   {name:"scissors", winsTo:["paper", "lizard"], image:require('./images/scissors.png')},
   {name:"lizard", winsTo:["spock", "paper"], image:require('./images/lizard.png')}, 
   {name:"spock", winsTo:["scissors", "rock"], image:require('./images/spock.png')}
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
            <img src= {choices[0].image.rock}></img>
            <Picks score={score} pick={setPlayerPick} choices= {choices}></Picks>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}



export default App;
