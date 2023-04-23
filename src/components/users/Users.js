import React, {useEffect, useState} from 'react';

import axios from "axios";
import User from "../user/User";


const Users = ({setUserId}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers((value)))
    },[])

    return (
        <div className={'UsersContainer'}>
            {users.map(value => <User key={value.id} user={value} setUserId={setUserId}/>)}
        </div>
    );
};

export default Users;