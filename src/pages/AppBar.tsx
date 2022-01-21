import React, {useReducer, useEffect, useState, Suspense} from 'react'
import UserBar from './UserBar';
import {appReducer} from '../reducers/action';
import {PostModel} from '../reducers/action-type/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import {themeModel} from '../reducers/action-type/theme';
import {StateContext, ThemeContext} from '../contexts/contexts';
import ChangeTheme from './ChangeTheme';
import Header from '../components/Header';
import {useResource} from 'react-request-hook';
import {apiGetPosts} from '../Api/api';
import {ActionType, PayLoadModel} from '../reducers/action-type/AppBar';


const AppBar = () => {
    const [stateValue, dispatchValue] = useReducer(appReducer, {user: '', post: [], error: ''});
    const [theme, setTheme] = useState<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'});
    const {user, error} = stateValue;
    const [posts, getPosts] = useResource(apiGetPosts);
    {
        console.log(posts)
    }
    useEffect(() => {
        getPosts()
    }, []);

    useEffect(() => {
        if (posts && posts.error) {
            dispatchValue({type: ActionType.POSTS_ERROR, payload: {} as PayLoadModel, data: []})
        }
        if (posts && posts.data) {
            dispatchValue({type: ActionType.FETCH_POSTS, payload: {user: '', post: {} as PostModel, error: ''}, data: posts.data})
        }
    }, [posts]);


    useEffect(() => {
        if (user) {
            document.title = `${user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user])
    return (
        <StateContext.Provider value={{state: stateValue, dispatch: dispatchValue}}>
            <ThemeContext.Provider value={theme}>
                <div style={{padding: 20}}>
                    <Header text={'React Hook Blog'}/>
                    <ChangeTheme theme={theme} setTheme={setTheme}/>
                    <br/>
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <UserBar/>
                    </Suspense>
                    <h5> {JSON.stringify(stateValue.post)} </h5>
                    <br/>
                    {user && <CreatePost/>}
                    <br/>
                    <hr/>
                    {error && <b>{error}</b>}
                    <PostList/>
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
export default AppBar;
