const { GraphQLServer } = require("graphql-yoga");
require("dotenv").config();

const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});

const options = {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
};

server.start(options, ({ port }) =>
  console.log(`Server is now running on http://localhost:${port}`)
);
