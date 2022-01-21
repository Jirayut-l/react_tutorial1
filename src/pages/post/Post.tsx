import React, {useContext} from 'react'
import {PostModel} from '../../reducers/action-type/Post';
import {ThemeContext} from '../../contexts/contexts';

const Post = ({post }: { post: PostModel}) => {
    console.log('rendering Post')
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

export default  React.memo( Post,(prevProps, nextProps) =>
    prevProps.post.title===nextProps.post.title &&
    prevProps.post.author=== nextProps.post.author &&
    prevProps.post.content === nextProps.post.content );
