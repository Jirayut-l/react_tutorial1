import {useContext, useEffect} from 'react';
import {StateContext} from '../../contexts/contexts';
import {useResource} from 'react-request-hook';
import {apiGetPosts} from '../../Api/api';
import {ActionType, PayLoadModel} from '../../reducers/action-type/AppBar';
import {PostModel} from '../../reducers/action-type/Post';
import PostList from '../../pages/post/PostList';

const HomePage = () => {
    const {state, dispatch} = useContext(StateContext);
    const {error} = state;
    const [posts, getPosts] = useResource(apiGetPosts);
    useEffect(getPosts, []);
    useEffect(() => {
        if (posts && posts.error) {
            dispatch({type: ActionType.POSTS_ERROR, payload: {} as PayLoadModel, data: []})
        }
        if (posts && posts.data) {
            dispatch({type: ActionType.FETCH_POSTS, payload: {user: '', post: {} as PostModel, error: ''}, data: posts.data});
        }
    }, [posts]);

    return (
        <>
            {error && <b>{error}</b>}
            <PostList/>
        </>
    )
}

export default HomePage;
