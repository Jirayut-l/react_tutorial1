import {ActionType, userAction, userState} from '../action-type/AppBar';
import {PostModel} from '../action-type/Post';

const userReducer = (state: userState, action: userAction): string => {
    switch (action.type) {
        case ActionType.LOGIN:
        case ActionType.REGISTER:
            return action.payload.user
        case ActionType.LOGOUT:
            return ''
        default:
            return state.user
    }
}

const postsReducer = (state: userState, action: userAction): PostModel[] => {
    switch (action.type) {
        case ActionType.CREATE_POST:
            const newPost: PostModel = {title: action.payload.post.title, content: action.payload.post.content, author: action.payload.post.author};
            return [newPost, ...state.post];
        default:
            return state.post
    }
}

export function appReducer(state: userState, action: userAction): { user: string, post: PostModel[] } {
    return {
        user: userReducer(state, action),
        post: postsReducer(state, action)
    }
}


