import React, {useContext, useState, useEffect} from 'react';
import {ActionType} from '../reducers/action-type/AppBar';
import {LoginDataModel,} from '../reducers/action-type/Login';
import {StateContext} from '../contexts/contexts';
import {PostModel} from '../reducers/action-type/Post';
import {useResource} from 'react-request-hook';
import {apiLogin} from '../Api/api';

const Login = () => {
    const [loginData, SetLoginData] = useState<LoginDataModel>({password: '', username: ''});
    const {dispatch} = useContext(StateContext);
    const [loginFailed, setLoginFailed] = useState(false)
    const [user, login] = useResource(apiLogin);
    useEffect(() => {
        if (user && user.data) {
            if (user.data.length >0) {
                setLoginFailed(false);
                dispatch({type: ActionType.LOGIN, payload: {user: user.data[0].username , post: {} as PostModel, error: ''}, data: []})
            } else {
                setLoginFailed(true);
            }
        }
        if (user && user.error) {
            setLoginFailed(true);
        }
    }, [user]);

    return (
        <>
            <label>{` Username:  ${loginData.username}  Password : ${loginData.password}`}</label>
            <form onSubmit={e => {
                e.preventDefault();
                login({username: loginData.username, password: loginData.password});
            }}>
                <label htmlFor="login-username">Username:</label>
                <input type="text" name="login-username" id="login-username" onChange={event => SetLoginData({...loginData, username: event.target.value})}/>
                <input type="password" name="login-Password" id="login-password" onChange={event => SetLoginData({...loginData, password: event.target.value})}/>
                <input type="submit" value="Login" disabled={loginData.username.length === 0}/>
                {loginFailed && <span style={{color: 'red'}}>Invalid username or password</span>}
            </form>
        </>
    );
}

export default Login;
