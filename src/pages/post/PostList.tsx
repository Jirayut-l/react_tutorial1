import React, {useContext} from 'react'
import Post from './Post';
import {StateContext} from '../../contexts/contexts';
import {ActionType} from '../../reducers/action-type/AppBar';

const PostList = () => {
    const {state, dispatch} = useContext(StateContext);
    const {post} = state;
    return (
        <>
            {post.map((post, index) => (
                <React.Fragment key={`post-${index}`}>
                    <Post post={post}/>  &nbsp;
                    <button value={'Delete'} onClick={() => dispatch({type: ActionType.DELETE_POST, payload: {user: state.user, post: post}})}> Delete</button>
                    <hr/>
                </React.Fragment>
            ))}
        </>
    )
}
// dispatch({type: ActionType.CREATE_POST, payload: {user: user, post: {id: FindId(), title: postData.title, content: postData.content, author: user}}});
export default PostList;
