import React from 'react';
import './Friends.css';

const Friends = (props) => {
    const {name, email} = props.friend;
    return (
        <div className="friend-card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friends;