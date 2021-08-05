import React, { useState, useEffect, Component } from "react";
import axios from "axios";

//const baseURL = "/api/v1/users";

/*
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("api/v1/users/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes.usersList))
    })

    return(
        <div>
            <h1 style={{ textAlign: "center", }}> Users From Test Backend </h1>
            {users.map(user => <li>{user}</li>)}
        </div>
    )
}

{users.map(user => <li>{user}</li>)}
*/

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/users/').then((response) => {
            setUsers(response.data);
        });
    }, []);

    if (!users) return null;

    console.log(users)

    return(
        <div>
            <h1 style={{ textAlign: "center", }}> Users From Test Backend </h1>
            <div>{users}</div>
        </div>
    );
}

export default Users;