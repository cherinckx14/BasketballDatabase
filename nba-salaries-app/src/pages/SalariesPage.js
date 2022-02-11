import React from 'react';
import SalaryForm from '../components/forms/SalaryForm';
import SalaryTable from '../components/SalaryTable';
import salaries from "../data/salaries.js";
function SalariesPage() {
    return (
        <>
            <h1>SalariesPage</h1>
            <SalaryTable salaries = {salaries}/>
            <SalaryForm/>
        </>
    );
}

export default SalariesPage;