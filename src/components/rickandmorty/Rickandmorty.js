import React from 'react';

function Rickandmorty(props) {
    let rickandmorty=props.props;
    return (
        <div>
            {rickandmorty.map(value =>(
                <div>
                    <h3>Name:{value.name}</h3>
                    <p>Id: {value.id}</p>
                    <p>Status: {value.status}</p>
                    <p>Spices: {value.species}</p>
                    <p>Gender: {value.gender}</p>
                    <img src={value.image} alt={value.name}/>
                </div>
            ))}
        </div>
    );
}

export default Rickandmorty;