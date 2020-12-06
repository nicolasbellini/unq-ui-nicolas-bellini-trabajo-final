import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Game.css';

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
            console.log(playerPick.name === computerPick.name)
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
            <p>Elegiste: {playerPick.name}</p>
            <p>La computadora eligio: {computerPick.name}</p>
            {tie? <p>Empate</p> : computerWins? <p>Perdiste</p> : <p>Ganaste</p>}
            <Link to="/" onClick={playAgain}>Jugar de nuevo?</Link>
        </div>
        </>
    )

}

export default Game