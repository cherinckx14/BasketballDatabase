import React from 'react';
import Form from './Form';

function PositionForm(props){
    let template = {
        title: 'Position Addition Form',
        fields: [
            {
                title: "Position",
                type: "text",
                name: "positionname"
            }
        ]
    }
    return (
        <Form template={template} />
    )
}


export default PositionForm