import React from 'react';

function PlayerRow({ player }) {
    return (
        <tr>
            <td>{player.player_ID}</td>
            <td>{player.player_first_name}</td>
            <td>{player.player_last_name}</td>
            <td>{player.player_birth_date}</td>
            <td>{player.player_number}</td>
            <td>{player.player_team_ID}</td>
            <td>{player.player_Positions_ID}</td>
        </tr>
    );
}

export default PlayerRow;