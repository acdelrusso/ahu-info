import React from 'react';

function Searchbar(props) {
    

    return (
        <div>
            <h1>Search</h1>
            <input type='text' placeholder="Enter AHU Name" value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Searchbar;