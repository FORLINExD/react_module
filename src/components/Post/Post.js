import React from 'react';

import './Post.css'

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={'post__div'}>
            <h3>Id: {id}</h3>
            <h4>UserId: {userId}</h4>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;