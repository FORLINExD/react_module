import React from 'react';

import './User.css'

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={'user__div'}>
            <div className={'id__name_div'}>
                <h3>Id: {id}</h3>
                <h3>Name: {name}</h3>
                <h3>Username: {username}</h3>
                <h3>Email: {email}</h3>
            </div>
        </div>
    );
};

export default User;