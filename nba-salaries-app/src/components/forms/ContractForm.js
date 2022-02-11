import React from 'react';
import Form from './Form';

function ContractForm(props){
    let template = {
        title: 'Contract Addition Form',
        fields: [
            {
                title: "Player Name",
                type: "text",
                name: "playername"
            }
        ]
    }
    return (
        <Form template={template} />
    )
}


export default ContractForm