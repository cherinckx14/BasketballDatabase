import React from 'react';
import PlayerRow from './PlayerRow';


function PlayerTable({ players }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birth Date</th>
                    <th>Number</th>
                    <th>player Team ID</th>
                    <th>player Positions ID</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => <PlayerRow player={player} key={i} />)}
            </tbody>
        </table>
    );
}

export default PlayerTable;