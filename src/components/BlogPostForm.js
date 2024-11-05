import React, { useState } from 'react';

function BlogPostForm({ addPost, authorId }) {
    const [post, setPost] = useState({ title: '', content: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/create-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...post, authorId }),
        })
        .then(res => res.json())
        .then(newPost => addPost(newPost));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" onChange={(e) => setPost({ ...post, title: e.target.value })} />
            <textarea placeholder="Content" onChange={(e) => setPost({ ...post, content: e.target.value })} />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default BlogPostForm;
