import React from 'react';
import ContractTable from '../components/ContractTable';
import ContractForm from '../components/forms/ContractForm';
import contracts from "../data/contracts.js";
function ContractsPage() {
    return (
        <>
            <h1>ContractsPage</h1>
            <ContractTable contracts = {contracts}/>
            <ContractForm/>
        </>
    );
}

export default ContractsPage;