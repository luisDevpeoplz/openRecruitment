import prisma from '../lib/prisma'

export const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
  },
}
