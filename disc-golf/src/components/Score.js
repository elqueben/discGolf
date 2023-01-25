import { Link } from "react-router-dom";
import React, { useState } from 'react';

export function Score() {

    const [score, setScore] = useState(0);
    const [par, setPar] = useState(3);
    const [currentHole, setCurrentHole] = useState(0);
    const [table, setTable] = useState([]);

    // increase or decrease par for hole
    let increasePar = () => {
        setPar(par + 1)
    }

    let decreasePar = () => {
        setPar(par - 1)
    }

    // increase or decrease user's score
    let increaseScore = () => {
        setScore(score + 1)
    }

    let decreaseScore = () => {
        setScore(score - 1)
    }

    // allows user to view previous inputs to edit the table
    let previousHole = () => {
        if (currentHole > 0){
            const arrayTable = table
            setPar(arrayTable[currentHole - 1].par)
            setScore(arrayTable[currentHole - 1].score)
            setCurrentHole(currentHole - 1)}
    }

    let nextHole = () => {
        if (table.length > (currentHole + 1)) {
            const arrayTable = table
            setPar(arrayTable[currentHole + 1].par)
            setScore(arrayTable[currentHole + 1].score)
            setCurrentHole(currentHole + 1)
        }
    }

    // allows user to make a new hole, therefore adding a new index to table
    let newHole = () => {
        setCurrentHole(currentHole + 1);
        const arrayTable = table 
        arrayTable.push({
            par: 3,
            score: 0
        })
        setTable(arrayTable);
        setPar(3);
        setScore(0);
    }

    // the score will be saved only if user presses this button
    let saveHole = () => {
        const arrayTable = table 
        arrayTable[currentHole] = {
            par: par,
            score: score
        }
        setTable(arrayTable);
    }


    return (
        <div id="center">
            <div>
                <h3>Set Par For Hole: {currentHole + 1} </h3>
                <button id="dec" onClick={decreasePar}><i className="fas fa-minus"></i></button>
                {par}
                <button id="inc" onClick={increasePar}><i className="fa-solid fa-plus"></i></button>
            </div>
            <div>
                <h3>Your Score:</h3>
                <button id="dec" onClick={decreaseScore}><i className="fas fa-minus"></i></button>
                {score}
                <button id="inc" onClick={increaseScore}><i className="fa-solid fa-plus"></i></button>
            </div>
            <div>
                <button className="btn btn-success" onClick={previousHole}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                <button className="btn btn-danger" onClick={saveHole}>Save Hole</button>
                <button className="btn btn-primary" onClick={newHole}>New Hole</button>
                <button className="btn btn-success" onClick={nextHole}><i className="fa-solid fa-arrow-right"></i></button>
                <br />
                <Link to="/Finalize"><button className="btn btn-dark">Finalize Score Card</button></Link>
             </div>
            { console.log(table) }
        </div>
    )
}