import { Link } from "react-router-dom";
import React, { useState } from 'react';


export function CreateScoreCard() {

    const [players, setPlayers] = useState(0);

    // allows the user to increase or decrease the amount of people that'll be playing
    let increasePlayers = () => {
        setPlayers(players + 1);
        
    }

    let decreasePlayers = () => {
        if (players > 0) {
            setPlayers(players - 1)
        }
    }



    return (
        <div id="center">
            <div>
            <h3>How Many Players?</h3>
                <div id="buttonsandnumbers">
                    <button id="dec" onClick={decreasePlayers}><i className="fas fa-minus"></i></button>
                        {players}
                    <button id="inc" onClick={increasePlayers}><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div>
                <Link to="/Score"><button className="btn btn-success">Start Card</button></Link>
            </div>
        </div>
    )
}