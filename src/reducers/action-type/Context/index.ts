import {Dispatch} from 'react';
import {UserAction, UserState} from '../AppBar';

export  type ContextPropsType = {
    state: UserState,
    dispatch: Dispatch<UserAction>
}
