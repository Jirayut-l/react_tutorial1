import {useContext, useEffect, useState} from 'react';
import {ActionType} from '../reducers/action-type/AppBar';
import {LoginModel,} from '../reducers/action-type/Login';
import {StateContext} from '../contexts/contexts';
import {PostModel} from '../reducers/action-type/Post';
import {apiRegisterUser} from '../Api/api';
import {useResource} from 'react-request-hook';

const Register = () => {
    const {dispatch} = useContext(StateContext);
    const [loginData, SetLoginData] = useState<LoginModel>({password: '', username: '', passwordRepeat: ''});
    const [user, register] = useResource(apiRegisterUser)

    useEffect(() => {
        if (user && user.data) {
            dispatch({type: ActionType.REGISTER, payload: {user: loginData.username, post: {} as PostModel, error: ''}, data: []});
        }
    }, [user]);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            register({username: loginData.username, password: loginData.password});
        }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" onChange={event => SetLoginData({...loginData, username: event.target.value})} name="register-username" id="register-username"/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" onChange={event => SetLoginData({...loginData, password: event.target.value})} name="register-password" id="register-password"/>
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" name="register-password-repeat" id="register-password-repeat"/>
            <input type="submit" disabled={loginData.username.length === 0 || loginData.password.length === 0 || loginData.password !== loginData.passwordRepeat}/>
        </form>
    )
}

export default Register;
