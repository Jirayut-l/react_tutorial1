export enum ActionType {
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout',
    CREATE_POST = 'createPost'
}

export type userAction = {
    type: ActionType;
    payload: string;
}

export type userState = {
    user: string;
}

export type  loginModel = {
    username: string,
    password: string,
    passwordRepeat: string
}

export type  themeModel = {
    primaryColor: string,
    secondaryColor: string
}
export type LoginDataModel = {
    username: string;
    password: string;
};
