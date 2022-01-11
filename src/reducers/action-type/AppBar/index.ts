export enum ActionType {
    LOGIN = 'login',
    REGISTER = 'register',
    LOGOUT = 'logout',
}


export type userAction = {
    type: ActionType;
    payload : string;
}

export type userState = {
    user: string;
}


export type  loginModel ={
    username : string,
    password :string,
    passwordRepeat:string
}
