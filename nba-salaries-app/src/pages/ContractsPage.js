import React from 'react';
import ContractTable from '../components/ContractTable';
import contracts from "../data/contracts.js";
function ContractsPage() {
    return (
        <>
            <h1>ContractsPage</h1>
            <ContractTable contracts = {contracts}/>
        </>
    );
}

export default ContractsPage;