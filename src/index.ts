import './config/start';
import { GraphQLServer, PubSub } from 'graphql-yoga'
import { resolvers } from './resolvers/resolvers';
import { getContext } from './context';


const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: './src/schema/schema.graphql',
  context: getContext(pubsub),
  resolvers
})
server.start({ port: Number(process.env.YOGA_PORT) }, () => console.log(`Server is  up and running on ${process.env.YOGA_ENDPOINT}`))

