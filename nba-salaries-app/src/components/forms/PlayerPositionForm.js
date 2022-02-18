import React from 'react';
import Form from './Form';

function PlayerPositionForm(props){
    let template = {
        title: 'Player Addition Form',
        fields: [
            {
                title: "Player ID",
                type: "text",
                name: "playerposition_playerID"
            },
            {
                title: "Point Guard",
                type: "text",
                name: "playerposition_pg"
            },
            {
                title: "Shooting Guard",
                type: "text",
                name: "playerposition_sg"
            },
            {
                title: "Small Forward",
                type: "text",
                name: "playerposition_sf"
            },
            {
                title: "Power Forward",
                type: "text",
                name: "playerposition_pf"
            },
            {
                title: "Center",
                type: "text",
                name: "playerposition_c"
            },
        ]
    }
    return (
        <Form template={template} />
    )
}


export default PlayerPositionForm