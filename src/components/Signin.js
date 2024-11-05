import React, { useState } from 'react';

function Signin({ setCurrentUser }) {
    const [userData, setUserData] = useState({ user_id: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data => setCurrentUser(data.user))
        .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="User ID" onChange={(e) => setUserData({ ...userData, user_id: e.target.value })} />
            <input placeholder="Password" type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default Signin;
