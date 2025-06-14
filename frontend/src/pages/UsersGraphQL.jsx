import React, { useState, useRef } from "react";
import { gql, useApolloClient } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

const GET_USERS_WITH_POSTS_TITLE = gql`
  query {
    users {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
`;

export default function UsersGraphQL() {
  const client = useApolloClient();
  const [time, setTime] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const start = useRef(0);
  

  const handleGetUsers = async () => {
    setLoading(true);
    setError(null);
    start.current = performance.now();
    try {
      const { data } = await client.query({ query: GET_USERS });
      setUsers(data.users);
      const end = performance.now();
      setTime(end - start.current);
    } catch (err) {
      console.error(err)
      setError(err);
    }
    setLoading(false);
  };

    const handleGetUsersWithPostTitle = async () => {
    setLoading(true);
    setError(null);
    start.current = performance.now();
    try {
      const { data } = await client.query({ query: GET_USERS_WITH_POSTS_TITLE });
      console.log(data)
      setUsers(data.users);
      const end = performance.now();
      setTime(end - start.current);
    } catch (err) {
      console.error(err)
      setError(err);
    }
    setLoading(false);
  };

  const handleClearUsers = () => {
    setUsers([]);
    setTime(0);
    setError(null);
  };

return (
    <div>
      <h1>Users (GraphQL)</h1>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={handleGetUsersWithPostTitle}>Get Users with Post Title</button>
      <button onClick={handleClearUsers}>Clear</button>

      {loading && <p>Lade...</p>}
      {error && <p>Fehler: {error.message}</p>}

      <p>query time: {time.toFixed(2)} ms</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            {user.posts && user.posts.length > 0 && (
              <ul>
                {user.posts.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}




