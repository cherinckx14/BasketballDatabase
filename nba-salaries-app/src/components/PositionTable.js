import React from 'react';
import PositionRow from './PositionRow';


function PositionTable({ positions }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Players</th>
                </tr>
            </thead>
            <tbody>
                {positions.map((position, i) => <PositionRow position={position} key={i} />)}
            </tbody>
        </table>
    );
}

export default PositionTable;