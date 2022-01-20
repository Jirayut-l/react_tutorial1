import React, {useReducer, useEffect, useState} from 'react'
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
import {getApiPosts} from '../Api/api';
import {ActionType, PayLoadModel} from '../reducers/action-type/AppBar';


const defaultPosts: PostModel[] = [
    {id: 1, title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl'},
    {id: 2, title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl'}
]

const AppBar = () => {
    const [stateValue, dispatchValue] = useReducer(appReducer, {user: '', post: defaultPosts});
    const [theme, setTheme] = useState<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'});
    const {user} = stateValue;
    const [posts, getPosts] = useResource(getApiPosts);

    useEffect(() => {
        getPosts()
    }, []);

    useEffect(() => {
       if(posts && posts.error){
           dispatchValue({type:ActionType.POSTS_ERROR,payload: {} as PayLoadModel, data:[] })
       }
       if(posts && posts.data){
           dispatchValue({type:ActionType.FETCH_POSTS, payload:{user:'',post:{} as PostModel}, data:posts.data})
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
                    <UserBar/>
                    <h5> {JSON.stringify(stateValue.post)} </h5>
                    <br/>
                    {user && <CreatePost/>}
                    <br/>
                    <hr/>
                    <PostList/>
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}
export default AppBar;
