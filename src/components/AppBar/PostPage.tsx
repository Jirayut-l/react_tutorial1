import {useResource} from 'react-request-hook';
import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Post from '../../pages/post/Post';
import {PostModel} from '../../reducers/action-type/Post';
import {apiGetPostsById} from '../../Api/api';
import {StateContext} from '../../contexts/contexts';
import {ActionType} from '../../reducers/action-type/AppBar';

const PostPage = () => {
    const {state, dispatch} = useContext(StateContext);
    const {id} = useParams<string>();
    const params: string = id ?? '';
    const [post, getPosts] = useResource(apiGetPostsById);
    const {error} = state

    useEffect(() => {
        getPosts(params);
    }, [params]);

    useEffect(() => {
        if (post && post.error) {
            dispatch({type: ActionType.POSTS_ERROR, payload: {post: {} as PostModel, error: post.error.message, user: ''}, data: []})
        }
    }, [post]);

    return (
        <>
            <div><Link to="/appbar">Go back</Link></div>
            {error && <b>{error}</b>}
            {post.data && <Post post={post.data ?? {} as PostModel}/>}
            <hr/>
        </>
    )
}

export default PostPage;
