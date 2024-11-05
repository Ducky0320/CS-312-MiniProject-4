import React, { useState } from 'react';

function Signup({ setCurrentUser }) {
    const [userData, setUserData] = useState({ user_id: '', password: '', name: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        })
        .then(res => res.json())
        .then(data => setCurrentUser(userData))
        .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="User ID" onChange={(e) => setUserData({ ...userData, user_id: e.target.value })} />
            <input placeholder="Password" type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
            <input placeholder="Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
