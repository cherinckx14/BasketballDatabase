import React from 'react';
import Form from './Form';

function TeamForm(props){
    let template = {
        title: 'Team Addition Form',
        fields: [
            {
                title: "Team Name",
                type: "text",
                name: "name"
            }
        ]
    }
    return (
        <Form template={template} />
    )
}


export default TeamForm;