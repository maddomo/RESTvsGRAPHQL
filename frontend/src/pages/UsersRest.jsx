import React, { useEffect, useState } from "react";
import "./UserRest.css"; 

function UsersRest() {
  const [time, setTime] = useState(0);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([])
  let start;
  const handleClearUsers = () => {
    setUsers([]);
    setTime(0);
    setPosts([])
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

  const getPosts = () => {
    fetch("http://localhost:4000/api/users/posts")
    .then(res => res.json())
      .then(data => {
        setPosts(data);
       
      })
      .catch(err => {
        console.error(err);
      });
  }

  const getboth = () =>{
    getPosts();
    getUsers();
  }

  return (
    <div>
    <h1>Users (REST)</h1>
    <button onClick={getUsers}>Get User</button>
    <button onClick={handleClearUsers}>Clear</button>
    <button onClick={getboth}>Get User with Posts Title</button>
    <p>query time: {time} ms</p>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} ({user.email})
          
        </li>
      ))}
    </ul>
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title} </li>
      ))}
    </ul>
     
    </div>
  );
}

export default UsersRest;
