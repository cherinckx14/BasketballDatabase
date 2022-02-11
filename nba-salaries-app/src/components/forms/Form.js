import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

function Form({ template }) {
    let { register, handleSubmit } = useForm();
    let { title, fields }  = template;

    const renderFields = (fields) =>{
        return fields.map(field => {
            let {title, type, name} = field;
            switch(type){
                case 'text':
                    return (
                        <div>
                            <label htmlFor={name}>{title}</label>
                            <input type="text" name={name} id={name}/> 
                        </div>
                    );
                case 'number':
                    return (
                        <div>
                            <label htmlFor={name}>{title}</label>
                            <input type="number" name={name} id={name} />
                        </div>
                    );

                case 'date':
                    return (
                        <div>
                            <label htmlFor={name}>{title}</label>
                            <input type="date" name={name} id={name} />
                        </div>
                    );
                default:
                    return(
                        <div>
                            <span className='red-text'>Invalid Field</span>
                        </div>
                    )

            }
            
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>{title}</h4>
                {renderFields(fields)}
                <br />
                <button type="submit" className="btn">submit</button>
            </form>
        </div>
    )
}

function onSubmit(values) {
    console.log(values);
}

export default Form;
