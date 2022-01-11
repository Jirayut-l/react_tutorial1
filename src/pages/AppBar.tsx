import React, {useReducer, useEffect} from 'react'
import userModel from '../model/user'
import UserBar from './UserBar';
import appReducer from '../reducers/action';
import {userState} from '../reducers/action-type/AppBar';


const defaultPosts = [
    {title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl'},
    {title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl'}
]

const AppBar = () => {
    const [state, dispatch] = useReducer(appReducer, {user:''});
    const { user } = state

    useEffect(() => {
        if (user) {
            document.title = `${state.user} - React Hooks Blog`
        } else {
            document.title = 'React Hooks Blog'
        }
    }, [user])
    return (
        <div style={{padding: 8}}>
            <UserBar user={user} dispatch={dispatch}/>
        </div>
    )
}

export default AppBar;
