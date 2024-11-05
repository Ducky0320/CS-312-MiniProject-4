import React from 'react';

function PostList({ posts, currentUser, updatePost, deletePost }) {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    {currentUser && currentUser.user_id === post.authorId && (
                        <>
                            <button onClick={() => deletePost(post.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PostList;
