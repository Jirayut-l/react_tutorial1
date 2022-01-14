import React from 'react'
import {PostModel} from '../../reducers/action-type/Post';

const Post = ({post}: { post: PostModel }) => {
    return (
        <>
            <h3>{post.title}</h3>
            <div>{post.content}</div>
            <br/>
            <i>Written by <b>{post.author}</b></i>
        </>
    )
}
export default Post;
