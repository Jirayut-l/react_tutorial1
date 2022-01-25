import {PostModel} from '../Post';

export enum ActionType {
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout',
    CREATE_POST = 'createPost',
    DELETE_POST = 'deletePost',
    POSTS_ERROR = 'postsError',
    FETCH_POSTS = 'fetchPost'
}

export type UserAction = {
    type: ActionType;
    payload: PayLoadModel ;
    data:PostModel[];
}

export type UserState = {
    user: string;
    post: PostModel[];
    error: string;
}

export type PayLoadModel = {
    user: string;
    post: PostModel;
    error : string;
}

