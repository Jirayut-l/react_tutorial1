import {ActionType} from '../AppBar';

export type postAction = {
    type: ActionType;
    payload : PostModel;
}

export type postState = {
    post: PostModel[];
}

export type  PostModel ={
    title : string,
    content :string,
    author:string
}
