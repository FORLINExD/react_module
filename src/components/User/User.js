import React from 'react';

const User = (props) => {
    let {id, name, username, email} = props;
    return (
        <div className={'user'}>
            <h3>ID: {id}</h3>
            <h2>Name: {name}</h2>
            <h3>Username: {username}</h3>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default User;