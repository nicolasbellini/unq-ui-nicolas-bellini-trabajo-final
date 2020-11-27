import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Game.css';

function Game (params){

    const playerPick = params.playerPick;
    const computerPick = params.computerPick;

    const [playerWins, setPlayerWins] = useState(false);
    const [computerWins, setComputerWins] = useState(false);
    const [tie, setTie] = useState(false);


    useEffect(()=>{
        chooseWinner()
      },[])

    function chooseWinner() {
        if(playerPick === computerPick){
            setTie(true)
        }
        if (playerPick === "rock" && computerPick === "scissors") {
            setPlayerWins(true);
            setComputerWins(false);
        } else if (playerPick === "rock" && computerPick === "paper") {
            setComputerWins(true);
            setPlayerWins(false);
        } else if (playerPick === "scissors" && computerPick === "paper") {
            setPlayerWins(true);
            setComputerWins(false);
        } else if (playerPick === "scissors" && computerPick === "rock") {
            setComputerWins(true);
            setPlayerWins(false);
        } else if (playerPick === "paper" && computerPick === "rock") {
            setPlayerWins(true);
            setComputerWins(false);
        } else if (playerPick === "paper" && computerPick === "scissors") {
            setComputerWins(true);
            setPlayerWins(false);
        }
    }

    function playAgain(){
        params.newComputerPick();
    }

    return(
        <>
        <div className="game-body">
            <p>Elegiste: {playerPick}</p>
            <p>La computadora eligio: {computerPick}</p>
            {tie? <p>Empate</p> : computerWins? <p>Perdiste</p> : <p>Ganaste</p>}
        
            <Link to="/" onClick={playAgain}>Jugar de nuevo?</Link>
        </div>
        </>
    )

}

export default Game