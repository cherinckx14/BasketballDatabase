import React from 'react';
import PlayerPositionRow from './PlayerPositionRow';


function PlayerPositionTable({ playerpositions }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Player ID</th>
                    <th>Positions ID</th>
                </tr>
            </thead>
            <tbody>
                {playerpositions.map((playerposition, i) => <PlayerPositionRow playerposition={playerposition} key={i} />)}
            </tbody>
        </table>
    );
}

export default PlayerPositionTable;