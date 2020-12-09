import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Game.css';
import rules from "../images/rules.png";

function Game (params){

    const playerPick = params.playerPick;
    const computerPick = params.computerPick;

    const [computerWins, setComputerWins] = useState(false);
    const [tie, setTie] = useState(false);


    useEffect(()=>{
        chooseWinner()
      },[])

    function chooseWinner() {
        if(playerPick.name === computerPick.name){
            setTie(true)
        }
        else{
            setComputerWins(computerPick.winsTo.includes(playerPick.name))
        }
    }

    function updateScore(){
        let actualScore = params.score
        if(!tie){
            if(computerWins){
                params.newScore(actualScore - 1)
            }
            else{
                params.newScore(actualScore + 1)
            }
        }

    }

    function playAgain(){
        updateScore()
        params.newComputerPick();
    }

    return(
        <>
        <div className="game-body">
            <h1>Elegiste: </h1>
            <img src={playerPick.image.default}/>
            <h4>{playerPick.name}</h4>
            <h1>La computadora eligio: </h1>
            <img src={computerPick.image.default}/>
            <h4>{computerPick.name}</h4>
            {tie? <p>Empate</p> : computerWins? <p>Perdiste (╯‵□′)╯︵┻━┻</p> : <p>Ganaste!</p>}
            <Link to="/" onClick={playAgain}>Jugar de nuevo?</Link>
            <h2>Reglas de juego:</h2>
            <img className="rules" src={rules}/>
        </div>
        </>
    )

}

export default Game