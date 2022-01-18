import {ActionType, UserAction, UserState} from '../action-type/AppBar';
import {PostModel} from '../action-type/Post';

const userReducer = (state: UserState, action: UserAction): string => {
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

const postsReducer = (state: UserState, action: UserAction): PostModel[] => {
    switch (action.type) {
        case ActionType.CREATE_POST:
            const newPost: PostModel = {id: action.payload.post.id, title: action.payload.post.title, content: action.payload.post.content, author: action.payload.post.author};
            return [newPost, ...state.post];
        case ActionType.DELETE_POST:
            return state.post.filter((item) => item.id !== action.payload.post.id)
        default:
            return state.post
    }
}

export function appReducer(state: UserState, action: UserAction): { user: string, post: PostModel[] } {
    return {
        user: userReducer(state, action),
        post: postsReducer(state, action)
    }
}


