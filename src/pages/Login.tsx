import React, {Dispatch, useState} from 'react';
import {ActionType, LoginDataModel, userAction} from '../reducers/action-type/AppBar';

const Login = ({dispatch}: { dispatch: Dispatch<userAction> }) => {
    // const [loginData, SetLoginData] = useState<LoginDataModel[]>([ {username: 'test1',password:'test1234'},{username: 'test2',password:'test12342'}]);
    const [loginData, SetLoginData] = useState<LoginDataModel>({password: '', username: ''});
    // const [username, setUsername] = useState('');

    return (
        <>
            <label>{` Username:  ${loginData.username}  Password : ${loginData.password}`}</label>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: ActionType.LOGIN, payload: {user: loginData.username, post: {title: '', content: '', author: ''}}})
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
