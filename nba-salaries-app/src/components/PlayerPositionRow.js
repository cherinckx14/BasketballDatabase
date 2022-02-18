import React from 'react';

function PlayerPositionRow({ playerposition }) {
    return (
        <tr>
            <td>{playerposition.playerposition_playerID}</td>
            <td>{playerposition.playerposition_pg}</td>
            <td>{playerposition.playerposition_sg}</td>
            <td>{playerposition.playerposition_sf}</td>
            <td>{playerposition.playerposition_pf}</td>
            <td>{playerposition.playerposition_c}</td>
        </tr>
    );
}

export default PlayerPositionRow;