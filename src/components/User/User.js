import React from 'react';

import './User.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className={'user__div'}>
            <div className={'id__name_div'}>
                <h3>Id: {id}</h3>
                <h3>Name: {name}</h3>
            </div>
            <button onClick={()=>getUser(user)}>User details</button>
        </div>
    );
};

export default User;