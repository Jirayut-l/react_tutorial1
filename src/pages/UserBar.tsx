import Logout from './Logout';
import Login from './Login';
import React, {Dispatch} from 'react';
import {userAction} from '../reducers/action-type/AppBar';
import Register from './Register';

const UserBar = ({user, dispatch}: { user: string, dispatch: Dispatch<userAction> }) => {
    if (user) {
        return <Logout user={user} dispatch={dispatch} />
    } else {
        return (
            <>
                <Login dispatch={dispatch} />
                <Register dispatch={dispatch} />
            </>
        )
    }
};

export default UserBar;
