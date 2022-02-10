import React from 'react';
import PlayerTable from '../components/PlayerTable';
import players from "../data/players.js";
function PlayersPage() {
    return (
        <>
            <h1>PlayersPage</h1>
            <PlayerTable players = {players}/>
        </>
    );
}

export default PlayersPage;