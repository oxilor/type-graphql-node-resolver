import { buildSchema } from 'type-graphql';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Server } from 'http';
import NodeResolver from '../resolvers/NodeResolver';
import UserResolver from '../resolvers/UserResolver';

const createServer = async (
  port: number,
  callback?: () => void
): Promise<Server> => {
  const schema = await buildSchema({
    resolvers: [UserResolver, NodeResolver],
    emitSchemaFile: true,
  });

  // Create a GraphQL server
  const graphqlServer = new ApolloServer({ schema });

  // Create an express server
  const app = express();
  graphqlServer.applyMiddleware({ app });

  return app.listen(port, callback);
};

export default createServer;
