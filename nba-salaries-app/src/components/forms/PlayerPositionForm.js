import React from 'react';
import Form from './Form';

function PlayerPositionForm(props){
    let template = {
        title: 'Player Addition Form',
        fields: [
            {
                title: "Player ID",
                type: "text",
                name: "PlayerID"
            },
            {
                title: "Positions ID",
                type: "text",
                name: "PositionsID"
            },
        ]
    }
    return (
        <Form template={template} />
    )
}


export default PlayerPositionForm