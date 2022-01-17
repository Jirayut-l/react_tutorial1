import {PostModel} from '../Post';
import {Dispatch} from 'react';

export enum ActionType {
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout',
    CREATE_POST = 'createPost'
}

export type userAction = {
    type: ActionType;
    payload: payLoadModel;
}

export type userState = {
    user: string;
    post: PostModel[];
}

export type loginModel = {
    username: string,
    password: string,
    passwordRepeat: string
}

export type themeModel = {
    primaryColor: string,
    secondaryColor: string
}
export type LoginDataModel = {
    username: string;
    password: string;
};

export type payLoadModel = {
    user: string;
    post: PostModel;
}

export  type ContextPropsType = {
    state: userState,
    dispatch: Dispatch<userAction>
}
