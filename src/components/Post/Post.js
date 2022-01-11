import React from 'react';

const Post = (props) => {
    let {title, body} = props;
    return (
        <div className={'post'}>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;