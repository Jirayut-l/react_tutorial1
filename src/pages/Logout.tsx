import {ActionType, userAction} from '../reducers/action-type/AppBar';
import {Dispatch} from 'react';

const Logout = ({user, dispatch}: { user: string, dispatch: Dispatch<userAction> }) => {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            dispatch({type: ActionType.LOGOUT, payload: {user: '', post: {title: '', content: '', author: ''}}})
        }}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}

export default Logout;
