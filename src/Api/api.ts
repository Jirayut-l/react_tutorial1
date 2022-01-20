import {request} from 'react-request-hook';
import {themeModel} from '../reducers/action-type/theme';
import {HttpMethod} from '../reducers/action-type/HttpMethod';
import {PostModel} from '../reducers/action-type/Post';

export const getApiThemes = () => {
    return request<themeModel[]>(
        {
            method: HttpMethod.GET,
            url: '/themes'
        });
}

export const getApiPosts = () => {
    return request<PostModel []>(
        {
            method: HttpMethod.GET,
            url: '/posts'
        });
}



