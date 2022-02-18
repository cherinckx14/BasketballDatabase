import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function PositionRow({ position }) {
    return (
        <tr>
            <td>{position.position_ID}</td>
            <td>{position.position_name}</td>
            <td><FontAwesomeIcon icon={solid('pen-to-square')} /></td>
            <td><FontAwesomeIcon icon={solid('trash')} /></td>
        </tr>
    );
}

export default PositionRow;