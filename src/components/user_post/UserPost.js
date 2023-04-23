import React from 'react';

const UserPost = ({post}) => {
    const [id, title,body]=post
    return (
        <div>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export default UserPost;