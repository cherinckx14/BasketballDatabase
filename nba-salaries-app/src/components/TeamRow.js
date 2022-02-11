import React from 'react';

function TeamRow({ team }) {
    return (
        <tr>
            <td>{team.team_ID}</td>
            <td>{team.team_name}</td>
        </tr>
    );
}

export default TeamRow;