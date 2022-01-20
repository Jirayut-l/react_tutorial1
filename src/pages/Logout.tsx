import {ActionType} from '../reducers/action-type/AppBar';
import {useContext} from 'react';
import {StateContext} from '../contexts/contexts';
import {PostModel} from '../reducers/action-type/Post';

const Logout = () => {
    const {state, dispatch} = useContext(StateContext)
    const {user} = state;
    return (
        <form onSubmit={event => {
            event.preventDefault();
            dispatch({type: ActionType.LOGOUT, payload: {user: '', post: {} as PostModel },data:[]})
        }}>
            Logged in as: <b>{user}</b>
            <input type="submit" value="Logout"/>
        </form>
    )
}

export default Logout;
