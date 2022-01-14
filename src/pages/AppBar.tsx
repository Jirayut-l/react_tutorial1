import React, {useReducer, useEffect, useState} from 'react'
import UserBar from './UserBar';
import {appReducer, appReducerPost} from '../reducers/action';
import {PostModel} from '../reducers/action-type/Post';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
import {themeModel} from '../reducers/action-type/AppBar';

const defaultPosts: PostModel[] = [
    {title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl'},
    {title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl'}
]

const AppBar = () => {
    const [state, dispatch] = useReducer(appReducer, {user: ''});
    const [statePost, dispatchPost] = useReducer(appReducerPost,{post:defaultPosts});
    const [theme,setTheme] =useState<themeModel>({primaryColor: '', secondaryColor: ''});

    useEffect(() => {
        if (state.user) {
            document.title = `${state.user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [state.user])
    return (
        <div style={{padding: 8}}>
            <UserBar user={state.user} dispatch={dispatch}/>
            <br />
            {state.user && <CreatePost user={state.user}  dispatch={dispatchPost} />}
            <br />
            <hr />
            <PostList posts={statePost.post} />
        </div>
    )
}

export default AppBar;
