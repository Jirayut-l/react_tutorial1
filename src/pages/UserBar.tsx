import Logout from './Logout';
import Login from './Login';
import React, {Dispatch, useContext} from 'react';
import {userAction} from '../reducers/action-type/AppBar';
import Register from './Register';
import {StateContext} from '../contexts/contexts';

const UserBar = () => {
    const {state, dispatch} = useContext(StateContext);
    const {user} = state;
    if (user) {
        return <Logout user={user} dispatch={dispatch}/>
    } else {
        return (
            <>
                <Login dispatch={dispatch}/>
                <Register dispatch={dispatch}/>
            </>
        )
    }
};

export default UserBar;
