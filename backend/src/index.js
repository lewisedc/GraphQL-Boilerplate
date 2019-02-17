const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("../prisma/generated/prisma-client");
require("dotenv").config();

const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: { prisma }
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
