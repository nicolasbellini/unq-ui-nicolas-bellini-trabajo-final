import React, { useState } from "react";
import { Link } from "react-router-dom";
import rules from "../images/rules.png";
import '../css/Picks.css';

function Pick({choice, setPick}){

    function playGame() {
        setPick(choice);
    }

    return(
        <Link to="/game">
        <img src={choice.image.default} onClick={playGame} />
        </Link>
    )
}

function Picks(params) {

    function pickAChoice(playerPick){
        return params.choices.find(choice => choice.name == playerPick)
    }

    function playGame(e) {
        params.pick(pickAChoice(e.target.dataset.id));
    }

    return (
        <>
        <div className="pick">
        <h1>Puntuacion actual: {params.score}</h1>
        <h1>Elegi una opcion:</h1>
            {params.choices.map(choice => <Pick choice= {choice} setPick= {params.pick}/>)}
            <div>
                <h2>Reglas de juego:</h2>
                <img className="rules" src={rules}/>
            </div>
        </div>
        </>
    )
}

export default Picks;