import React from 'react';
import PlayerPositionForm from '../components/forms/PlayerPositionForm';
import PlayerPositionTable from '../components/PlayerPositionTable';
import playerpositions from "../data/playerpositions.js";
function PlayerPositionsPage() {
    return (
        <>
            <h1>PlayerPositionsPage</h1>
            <PlayerPositionTable playerpositions = {playerpositions}/>
            <PlayerPositionForm/>
        </>
    );
}

export default PlayerPositionsPage;