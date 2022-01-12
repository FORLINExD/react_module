import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment"

const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });

    }, [])

    return (
        <div className={'comments__div'}>
            {comments.map(value => <Comment key={value.id} body={value.body} />)}
        </div>
    );
};

export default Comments;
