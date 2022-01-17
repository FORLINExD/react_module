import React from 'react';

import './UserDetails.css'

const UsersDetails = ({user, getUserId}) => {
    const {id, name, username, email, phone, website} = user;

    return (
        <div className={'user__details_container'}>
            <div className={'user__details_info'}>
                <h4>Id: {id}</h4>
                <h4>Name: {name}</h4>
                <h4>Username: {username}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Website: {website}</h4>
                <button onClick={()=> getUserId(id)}>Show posts</button>
            </div>
        </div>
    );
};

export default UsersDetails;