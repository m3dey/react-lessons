import React from 'react';

const User = ({user, setUserId}) => {
    const [id,name,username]=user
    return (
        <div className={'userCard'}>
            <h3>Name: {name}</h3>
            <h4>Username: {username}</h4>
            <button onClick={()=>setUserId(id)}>Show posts ↓</button>
            <hr/>
        </div>
    );
};

export default User;