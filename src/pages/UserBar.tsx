import Login from './Login';
import React, {useContext} from 'react';
import Register from './Register';
import {StateContext} from '../contexts/contexts';

const Logout = React.lazy(()=> import('./Logout'));
const UserBar = () => {
    const {state} = useContext(StateContext);
    const {user} = state;
    if (user) {
        return <Logout />
    } else {
        return (
            <>
                <Login />
                <Register/>
            </>
        )
    }
};

export default UserBar;
