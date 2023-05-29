import { createSchema } from 'graphql-yoga'
import prisma from '../prisma/prisma'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type User {
      id: ID!
      name: String!
      email: String!
      createdAt: String!
    }
    type Query {
      users: [User]!
    }
  `,
  resolvers: {
    Query: {
      users: () => {
        return prisma.user.findMany()
      },
    },
  },
})
