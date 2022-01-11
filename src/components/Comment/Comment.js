import React from 'react';

const Comment = (props) => {
    let {body} = props;
    return (
        <div className={'comment'}>
            <p>{body}</p>
        </div>
    );
};

export default Comment;