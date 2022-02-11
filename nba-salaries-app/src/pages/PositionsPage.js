import React from 'react';
import PositionForm from '../components/forms/PositionForm';
import PositionTable from '../components/PositionTable';
import positions from "../data/positions.js";
function PositionsPage() {
    return (
        <>
            <h1>PositionsPage</h1>
            <PositionTable positions = {positions}/>
            <PositionForm/>
        </>
    );
}

export default PositionsPage;