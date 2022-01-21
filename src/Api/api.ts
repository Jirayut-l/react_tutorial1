import {request} from 'react-request-hook';
import {themeModel} from '../reducers/action-type/theme';
import {HttpMethod} from '../reducers/action-type/HttpMethod';
import {PostModel} from '../reducers/action-type/Post';
import {LoginDataModel} from '../reducers/action-type/Login';

export const apiGetThemes = () => {
    return request<themeModel[]>(
        {
            method: HttpMethod.GET,
            url: '/themes'
        });
}

export const apiGetPosts = () => {
    return request<PostModel []>(
        {
            method: HttpMethod.GET,
            url: '/posts'
        });
}

export const apiCreatePosts = (post: PostModel) => {
    return request<PostModel>({
        method: HttpMethod.POST,
        url: '/posts',
        data: post
    })
}
export const apiRegisterUser = (login: LoginDataModel) => {
    return request<LoginDataModel>({
        method: HttpMethod.POST,
        url: '/users',
        data: login
    })
}

export const apiLogin = (login: LoginDataModel) => {
    return request<LoginDataModel []>({
        method: HttpMethod.GET,
        url: `/users?username=${encodeURI(login.username)}&password=${encodeURI(login.password)}`,
    })
}



