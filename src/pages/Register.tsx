import {useContext, useState} from 'react';
import {ActionType} from '../reducers/action-type/AppBar';
import {LoginModel,} from '../reducers/action-type/Login';
import {StateContext} from '../contexts/contexts';
import {PostModel} from '../reducers/action-type/Post';

const Register = () => {
    const {dispatch} = useContext(StateContext);
    const [loginData, SetLoginData] = useState<LoginModel>({password: '', username: '', passwordRepeat: ''});
    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: ActionType.REGISTER, payload: {user: loginData.username, post: {} as PostModel}, data: []})
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
