import {useContext, useState} from 'react';
import {ActionType} from '../../reducers/action-type/AppBar';
import {PostModel} from '../../reducers/action-type/Post';
import {StateContext} from '../../contexts/contexts';


const CreatePost = () => {
    const {state, dispatch} = useContext(StateContext);
    const {user} = state
    const [postData, SetPostData] = useState<PostModel>({} as PostModel);
    const handleSubmit = (): void => {
        SetPostData({title: '', content: '', id: 0, author: ''});
    }
    const FindId = (): number => {
        return state.post.length + 1;
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: ActionType.CREATE_POST, payload: {user: user, post: {id: FindId(), title: postData.title, content: postData.content, author: user}}, data: []});
            handleSubmit();
        }}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={postData.title} onChange={event => SetPostData({...postData, title: event.target.value})} name="create-title" id="create-title"/>
            </div>
            <textarea value={postData.content} onChange={event => SetPostData({...postData, content: event.target.value})}/>
            <input type="submit" value="Create"/>
        </form>
    )
}
export default CreatePost;
