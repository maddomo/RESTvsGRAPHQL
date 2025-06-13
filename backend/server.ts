import express from 'express';
import cors from 'cors';
import restRouter from './src/rest/users';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './src/graphql/schema';
import { resolvers } from './src/graphql/resolvers';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'  
}));


const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => console.log('Server läuft auf http://localhost:4000'));
