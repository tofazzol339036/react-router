import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div className="friend-card">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id: <Link to={`/friend/${id}`}>Show Detail of {id}</Link> </p>
            <button onClick={() => {handleClick(id)}}>Show Detail</button>
        </div>
    );
};

export default Friends;