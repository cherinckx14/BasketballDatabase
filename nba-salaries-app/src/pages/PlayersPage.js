import React from 'react';
import PlayerTable from '../components/PlayerTable';
import players from "../data/players.js";
import PlayerForm from '../components/forms/PlayerForm';
function PlayersPage() {
    return (
        <>
            <h1>PlayersPage</h1>
            <PlayerTable players = {players}/>
            <PlayerForm />
        </>
    );
}

export default PlayersPage;