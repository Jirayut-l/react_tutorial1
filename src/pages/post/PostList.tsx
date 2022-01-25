import React, {useContext, useEffect} from 'react'
import Post from './Post';
import {StateContext} from '../../contexts/contexts';
import {ActionType, PayLoadModel, UserAction} from '../../reducers/action-type/AppBar';
import {useNavigate} from 'react-router-dom';
import {useResource} from 'react-request-hook';
import {apiDeletePosts, apiGetPostsById} from '../../Api/api';
import {PostModel} from '../../reducers/action-type/Post';
import PostPage from '../../components/AppBar/PostPage';

const PostList = () => {
    const {state, dispatch} = useContext(StateContext);
    const {post} = state;
    const navigate = useNavigate();
    const [posts, getPosts] = useResource(apiDeletePosts);

    const deletePost = (postModel: PostModel): void => {
        getPosts(postModel.id);
        if (posts && posts.error) {
            dispatch({type: ActionType.DELETE_POST, payload: {user: state.user, post: {} as PostModel, error: posts.error.message}, data: []})
        } else {
            dispatch({type: ActionType.DELETE_POST, payload: {user: state.user, post: postModel, error: ''}, data: []})
        }
    }

    return (
        <>
            {post.map((post, index) => (
                <React.Fragment key={`post-${index}`}>
                    <Post post={post}/>   &nbsp;
                    <button onClick={() => (navigate(`/appbar/view/${post.id}`))}> Detail</button>
                    &nbsp;
                    <button value={'Delete'} onClick={() => deletePost(post)}> Delete</button>
                    <hr/>
                </React.Fragment>
            ))}
        </>
    )
}
// dispatch({type: ActionType.CREATE_POST, payload: {user: user, post: {id: FindId(), title: postData.title, content: postData.content, author: user}}});
export default PostList;
