import React, { useEffect, useState } from "react";
import "./UserRest.css"; 

function UsersRest() {
  const [time, setTime] = useState(0);
  const [users, setUsers] = useState([]);
  let start;
  const handleClearUsers = () => {
    setUsers([]);
    setTime(0);
  }
  
  const getUsers = () => {
    const start = performance.now();
    fetch("http://localhost:4000/api/users") // REST-Endpoint anpassen
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        const end = performance.now();
        setTime(end - start);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div>
    <h1>Users (REST)</h1>
    <button onClick={getUsers}>Get User</button>
    <button onClick={handleClearUsers}>Clear</button>
    <p>query time: {time} ms</p>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
     
    </div>
  );
}

export default UsersRest;
