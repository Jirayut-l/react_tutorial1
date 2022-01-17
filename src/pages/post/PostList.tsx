import React,{useContext} from 'react'
import {PostModel} from '../../reducers/action-type/Post';
import Post from './Post';
import {StateContext} from '../../contexts/contexts';

const PostList = () => {
    const {state} = useContext(StateContext);
    const {post} = state;
    return (
        <>
            {post.map((post, index) => (
                <React.Fragment key={`post-${index}`}>
                    <Post post={post}/>
                    <hr/>
                </React.Fragment>
            ))}
        </>
    )
}
export default PostList;
