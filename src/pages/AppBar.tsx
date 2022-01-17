import React, {useReducer, useEffect, useState} from 'react'
import UserBar from './UserBar';
import {appReducer} from '../reducers/action';
import {PostModel} from '../reducers/action-type/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import {themeModel} from '../reducers/action-type/AppBar';
import {StateContext, ThemeContext} from '../contexts/contexts';
import ChangeTheme from './ChangeTheme';
import Header from '../components/Header';

const defaultPosts: PostModel[] = [
    {title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl'},
    {title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl'}
]

const AppBar = () => {
    const [stateValue, dispatchValue] = useReducer(appReducer, {user: '', post: defaultPosts});
    const [theme, setTheme] = useState<themeModel>({primaryColor: 'deepskyblue', secondaryColor: 'coral'});
    useEffect(() => {
        if (stateValue.user) {
            document.title = `${stateValue.user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [stateValue.user])
    return (
        <StateContext.Provider value={{state: stateValue, dispatch: dispatchValue}}>
            <ThemeContext.Provider value={theme}>
                <div style={{padding: 8}}>
                    <Header text={'React Hook Blog'}/>
                    <ChangeTheme theme={theme} setTheme={setTheme}/>
                    <br/>
                    <UserBar/>
                    <br/>
                    {stateValue.user && <CreatePost/>}
                    <br/>
                    <hr/>
                    <PostList/>
                </div>
            </ThemeContext.Provider>
        </StateContext.Provider>
    )
}

export default AppBar;
