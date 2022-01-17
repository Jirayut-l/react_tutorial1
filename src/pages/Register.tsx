import {Dispatch, useState} from 'react';
import {ActionType, loginModel, userAction} from '../reducers/action-type/AppBar';

const Register = ({dispatch}: { dispatch: Dispatch<userAction> }) => {
    const [loginData, SetLoginData] = useState<loginModel>({password: '', username: '', passwordRepeat: ''});
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: ActionType.REGISTER, payload: {user: loginData.username, post: {title: '', content: '', author: ''}}})
        }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" onChange={event => SetLoginData({...loginData, username: event.target.value})} name="register-username" id="register-username"/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" onChange={event => SetLoginData({...loginData, password: event.target.value})} name="register-password" id="register-password"/>
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" onChange={event => SetLoginData({...loginData, passwordRepeat: event.target.value})} name="register-password-repeat" id="register-password-repeat"/>
            <input type="submit" disabled={loginData.username.length === 0 || loginData.password.length === 0 || loginData.password !== loginData.passwordRepeat}/>
        </form>
    )
}

export default Register;
