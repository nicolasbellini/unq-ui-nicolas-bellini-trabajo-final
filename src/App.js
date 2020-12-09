import React,{useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Picks from './components/Picks';


function App(){

  const [playerPick, setPlayerPick] = useState("");
  const [computerPick, setComputerPick] = useState("");
  const [score, setScore] = useState(0);  
  const choices = [
   {name:"Piedra", winsTo:["Lagarto", "Tijera"], image:require('./images/rock.png')},
   {name:"Papel", winsTo:["Piedra", "Spock"], image:require('./images/paper.png')},
   {name:"Tijera", winsTo:["Papel", "Lagarto"], image:require('./images/scissors.png')},
   {name:"Lagarto", winsTo:["Spock", "Papel"], image:require('./images/lizard.png')},
   {name:"Spock", winsTo:["Tijera", "Piedra"], image:require('./images/spock.png')}
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
