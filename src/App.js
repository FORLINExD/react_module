import React, {useEffect, useState} from 'react';

import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import './App.css'
import {userService} from "./services/user.service";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {
        let filteredArray = [...users]

        if (data.name) {
            filteredArray = filteredArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filteredArray = filteredArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filteredArray = filteredArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filteredArray)
    }

    return (
        <div className={'main__container'}>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;