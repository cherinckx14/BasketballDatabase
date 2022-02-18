import React from 'react';

function PositionRow({ position }) {
    return (
        <tr>
            <td>{position.position_ID}</td>
            <td>{position.position_name}</td>
        </tr>
    );
}

export default PositionRow;