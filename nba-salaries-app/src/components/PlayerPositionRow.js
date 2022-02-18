import React from 'react';

function PlayerPositionRow({ playerposition }) {
    return (
        <tr>
            <td>{playerposition.playerposition_playerID}</td>
            <td>{playerposition.playerposition_positionID}</td>
        </tr>
    );
}

export default PlayerPositionRow;