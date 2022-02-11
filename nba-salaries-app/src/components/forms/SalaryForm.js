import React from 'react';
import Form from './Form';

function SalaryForm(props){
    let template = {
        title: 'Salary Addition Form',
        fields: [
            {
                title: "Contract ID",
                type: "text",
                name: "positionname"
            },

            {
                title: "Salary",
                type: "number",
                name: "salary"
            },

            {
                title: "Year",
                type: "number",
                name: "year"
            }

        ]
    }
    return (
        <Form template={template} />
    )
}


export default SalaryForm