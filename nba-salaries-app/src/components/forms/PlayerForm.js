import React from 'react';
import Form from './Form';

function PlayerForm(props){
    let template = {
        title: 'Player Addition Form',
        fields: [
            {
                title: "First Name",
                type: "text",
                name: "firstname"
            },
            {
                title: "Last Name",
                type: "text",
                name: "lastname"
            },
            {
                title: "Birth Date",
                type: "date",
                name: "birthdate"
            },
            {
                title: "Number",
                type: "number",
                name: "number"
            },
            {
                title: "Team",
                type: "text",
                name: "team"
            },
            {
                title: "positions",
                type: "text",
                name: "positions"
            },


        ]
    }
    return (
        <Form template={template} />
    )
}


export default PlayerForm