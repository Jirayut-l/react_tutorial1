import {PostModel} from '../Post';

export enum ActionType {
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout',
    CREATE_POST = 'createPost',
    DELETE_POST = 'deletePost'
}

export type UserAction = {
    type: ActionType;
    payload: PayLoadModel;
}

export type UserState = {
    user: string;
    post: PostModel[];
}

export type PayLoadModel = {
    user: string;
    post: PostModel;
}

