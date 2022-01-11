import React, {Dispatch, useState} from 'react';
import userModel from '../model/user'
import {ActionType, userAction} from '../reducers/action-type/AppBar';

type LoginDataModel = {
    username: string;
    password: string;
};


const Login = ({dispatch}: { dispatch: Dispatch<userAction> }) => {
    // const [loginData, SetLoginData] = useState<LoginDataModel[]>([ {username: 'test1',password:'test1234'},{username: 'test2',password:'test12342'}]);
    const [loginData, SetLoginData] = useState<LoginDataModel>({password: '', username: ''});
    // const [username, setUsername] = useState('');

    return (
        <>
            {/*<label>{` Value:  ${JSON.stringify(loginData)}`}</label>*/}
            <label>{` Username:  ${loginData.username}  Password : ${loginData.password}`}</label>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: ActionType.LOGIN, payload: loginData.username})
            }}>
                <label htmlFor="login-username">Username:</label>
                <input type="text" name="login-username" id="login-username"
                       onChange={event => SetLoginData({...loginData, username: event.target.value})}/>
                <input type="text" name="login-Password" id="login-password"/>
                {/*<input type="text" name="login-username" id="login-username"*/}
                {/*       onChange={event => SetLoginData(prevState => ({...loginData, username: event.target.value}))}/>*/}
                {/*<label htmlFor="login-password">Password:</label>*/}
                {/*<input type="text" name="login-Password" id="login-password"*/}
                {/*       onChange={event => SetLoginData(prevState => ({...loginData, password: event.target.value}))}/>*/}
                <input type="submit" value="Login" disabled={loginData.username.length === 0}/>
            </form>
        </>
    );
}

export default Login;
