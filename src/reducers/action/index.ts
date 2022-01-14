import {ActionType, userAction, userState} from '../action-type/AppBar';
import {postAction, PostModel, postState} from '../action-type/Post';

const userReducer = (state: userState, action: userAction): string => {
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

const postsReducer = (state: postState, action: postAction): PostModel[] => {
    switch (action.type) {
        case ActionType.CREATE_POST:
            const newPost: PostModel = {title: action.payload.title, content: action.payload.content, author: action.payload.author};
            return [newPost, ...state.post];
        default:
            return state.post
    }
}

export function appReducer(state: userState, action: userAction): { user: string } {
    return {
        user: userReducer(state, action),
    }
}

export function appReducerPost(state: postState, action: postAction): { post: PostModel[] } {
    return {
        post: postsReducer(state, action)
    }
}

