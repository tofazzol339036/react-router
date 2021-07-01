import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    })
    const friendStyle = {
        width: '50%',
        margin: '20px auto',
        padding: '20px',
        background: '#ddd',
        border: '2px solid purple',
        borderRadius: '15px'

    }
    const {name, phone, email, website} = friend;
    return (
        <div style={friendStyle}>
            <h1>This is friend detail of : {friendId}</h1>
            <h4>{name}</h4>
            <h4>{phone}</h4>
            <h4>{email}</h4>
            <h4>{website}</h4>
        </div>
    );
};

export default FriendDetail;