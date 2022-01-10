import React from 'react';
import './Displaycard.css';

function Displaycard(props) {
    return (
        <div className='card'>
            <h1 className='card-name'>{props.name}</h1>
            <h2 className='card-equipment'>Equipment Number: {props.equipmentNumber}</h2>
            <h3 className='card-department'>Department: {props.department}</h3>
            {Object.entries(props.rooms).map(entry => {
                const [key, value] = entry;
                return (
                    <p className='card-body'>{key} {value}</p>
                )
            })}
        </div>
    )
}

export default Displaycard;
