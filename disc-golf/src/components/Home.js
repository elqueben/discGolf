import { Link } from "react-router-dom";
import React, { useState } from 'react';

export function Home() {
    return (
        <div>
            <div id="navbar">
                <ul>
                    <Link to="/CreateScoreCard"><button id="createbutton" className="btn btn-warning" href="./CreateScoreCard">Create a New Score Card</button></Link>
                </ul>
            </div>
        </div>
    )
}