import React from 'react';

function Simpsons(props) {
    let  simpsons=props.props;
    return (
        <div>
            {simpsons.map(value => (
                <div>
                    <h3>Name: {value.name}, Surname: {value.surname}</h3>
                    <p> Age: {value.age}</p>
                    <img src={value.photo} alt={value.name}/>
                    <p>{value.info}</p>
                </div>
            ))}
        </div>
    );
}

export default Simpsons;