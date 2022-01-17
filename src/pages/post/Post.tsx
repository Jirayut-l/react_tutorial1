import React, {useContext} from 'react'
import {PostModel} from '../../reducers/action-type/Post';
import {ThemeContext} from '../../contexts/contexts';

const Post = ({post}: { post: PostModel }) => {
    const context = useContext(ThemeContext);
    return (
        <>
            <h3 style={{color:context.secondaryColor}} >{post.title}</h3>
            <div>{post.content}</div>
            <br/>
            <i>Written by <b>{post.author}</b></i>
        </>
    )
}
export default Post;
