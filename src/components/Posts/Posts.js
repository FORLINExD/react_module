import React from 'react';

import Post from "../Post/Post";
import './Posts.css'

const Posts = ({posts}) => {
    return (
        <div className={'posts__container'}>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default Posts;