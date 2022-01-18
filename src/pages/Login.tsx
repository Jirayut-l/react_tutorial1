import React, {useContext, useState} from 'react';
import {ActionType} from '../reducers/action-type/AppBar';
import {LoginDataModel,} from '../reducers/action-type/Login';
import {StateContext} from '../contexts/contexts';
import {PostModel} from '../reducers/action-type/Post';

const Login = () => {
    const [loginData, SetLoginData] = useState<LoginDataModel>({password: '', username: ''});
    const {dispatch} = useContext(StateContext);

    return (
        <>
            <label>{` Username:  ${loginData.username}  Password : ${loginData.password}`}</label>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: ActionType.LOGIN, payload: {user: loginData.username, post: {} as PostModel}})
            }}>
                <label htmlFor="login-username">Username:</label>
                <input type="text" name="login-username" id="login-username" onChange={event => SetLoginData({...loginData, username: event.target.value})}/>
                <input type="text" name="login-Password" id="login-password"/>
                <input type="submit" value="Login" disabled={loginData.username.length === 0}/>
            </form>
        </>
    );
}

export default Login;
