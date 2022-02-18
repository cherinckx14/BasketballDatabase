import React from 'react';
import PositionTable from '../components/PositionTable';
import positions from "../data/positions.js";
function PositionsPage() {
    return (
        <>
            <h1>PositionsPage</h1>
            <PositionTable positions = {positions}/>
        </>
    );
}

export default PositionsPage;