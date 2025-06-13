import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/Home";
import UsersRest from "./pages/UsersRest";
import UsersGraphQL from "./pages/UsersGraphQL";
import "./App.css";



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/users-rest">Users REST</Link> |{" "}
          <Link to="/users-graphql">Users GraphQL</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users-rest" element={<UsersRest />} />
          <Route path="/users-graphql" element={<UsersGraphQL />} />
        </Routes>
      </BrowserRouter>
   </ApolloProvider>
  );
}

export default App;

