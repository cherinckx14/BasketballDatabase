import React from 'react';
import PlayerPositionRow from './PlayerPositionRow';


function PlayerPositionTable({ playerpositions }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Player ID</th>
                    <th>Point Guard</th>
                    <th>Shooting Guard</th>
                    <th>Small Forward</th>
                    <th>Power Forward</th>
                    <th>Center</th>
                </tr>
            </thead>
            <tbody>
                {playerpositions.map((playerposition, i) => <PlayerPositionRow playerposition={playerposition} key={i} />)}
            </tbody>
        </table>
    );
}

export default PlayerPositionTable;