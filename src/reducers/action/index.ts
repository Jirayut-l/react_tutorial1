import {ActionType, userAction, userState} from '../action-type/AppBar';

function userReducer(state: userState, action: userAction) {
    switch (action.type) {
        case ActionType.LOGIN:
        case ActionType.REGISTER:
            return action.payload
        case ActionType.LOGOUT:
            return ''
        default:
            return state.user
    }
}

export default function appReducer(state: userState, action: userAction)  {
    return {
        user: userReducer(state, action),
    }
}
