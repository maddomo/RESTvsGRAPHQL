import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export default function UsersGraphQL() {
  const [time, setTime] = useState(0);
  const [users, setUsers] = useState([]);
  const [loadUsers, { loading, error }] = useLazyQuery(GET_USERS, {
    onCompleted: (data) => {
      const end = performance.now();
      setTime(end - start); 
      setUsers(data.users);
    }
  });

  let start;

  const handleGetUsers = () => {
    start = performance.now(); 
    loadUsers();              
  };

  const handleClearUsers = () => {
    setUsers([]);
    setTime(0);
  }

  return (
    <div>
      <h1>Users (GraphQL)</h1>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={handleClearUsers}>Clear</button>

      {loading && <p>Lade...</p>}
      {error && <p>Fehler: {error.message}</p>}
      <p>query time: {time} ms</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
      
    </div>
  );
}



