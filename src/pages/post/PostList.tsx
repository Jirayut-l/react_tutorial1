import React from 'react'
import {PostModel} from '../../reducers/action-type/Post';
import Post from './Post';

const PostList = ({posts}: { posts: PostModel[] }) => {
    return (
        <>
            {posts.map((post, index) => (
                <React.Fragment key={`post-${index}`}>
                    <Post post={post}/>
                    <hr/>
                </React.Fragment>
            ))}
        </>
    )
}
export default PostList;
