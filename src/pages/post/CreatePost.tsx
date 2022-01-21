import {useContext, useState} from 'react';
import {ActionType} from '../../reducers/action-type/AppBar';
import {PostModel} from '../../reducers/action-type/Post';
import {StateContext} from '../../contexts/contexts';
import {apiCreatePosts} from '../../Api/api';
import {useResource} from 'react-request-hook';

const CreatePost = () => {
    const {state, dispatch} = useContext(StateContext);
    const {user} = state
    const [postData, SetPostData] = useState<PostModel>({id: 0, content: '', author: '', title: ''});
    const [, createPost] = useResource(apiCreatePosts);

    const FindId = (): number => {
        return state.post.length + 1;
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            createPost({id: FindId(), title: postData.title, content: postData.content, author: user});
            dispatch({type: ActionType.CREATE_POST, payload: {user: user, post: {id: FindId(), title: postData.title, content: postData.content, author: user}, error: ''}, data: []});
            SetPostData({id: 0, content: '', author: '', title: ''});
        }}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={postData.title} onChange={(event) => (SetPostData({...postData, title: event.target.value}))} name="create-title" id="create-title"/>
            </div>
            <textarea value={postData.content} onChange={event => SetPostData({...postData, content: event.target.value})}/>
            <input type="submit" value="Create"/>
        </form>
    )
}
export default CreatePost;
