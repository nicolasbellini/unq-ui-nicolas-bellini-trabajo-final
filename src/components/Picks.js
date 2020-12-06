import React, { useState } from "react";
import { Link } from "react-router-dom";
import lizard from '../images/lizard.png';
import paper from "../images/paper.png";
import rock from "../images/rock.png";
import scissors from "../images/scissors.png";
import spock from "../images/spock.png"
import rules from "../images/rules.png";
import '../css/Picks.css';

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
            <img className="triangle"/>
            <Link to="/game">
                <img data-id="paper" className="class_paper" src={paper} onClick={playGame} />
            </Link>
            <Link to="/game">
                <img data-id="scissors" className="class_rock" src={rock} onClick={playGame}/>
            </Link>
            <Link to="/game">
                <img data-id="rock" className="class_scissors" src={scissors} onClick={playGame}/>
            </Link>
            <Link to="/game">
                <img data-id="lizard" className="class_lizard" src={lizard} onClick={playGame}/>
            </Link>
            <Link to="/game">
                <img data-id="spock" className="class_spock" src={spock} onClick={playGame}/>
            </Link>
            <div>
                <h2>Reglas de juego:</h2>
                <img className="rules" src={rules}/>
            </div>
        </div>
        </>
    )
}

export default Picks;