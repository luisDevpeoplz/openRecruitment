export const resolvers = {
  Query: {
    users: () => [
      {
        id: '1',
        name: 'John Doe',
        email: 'maill@mail.com',
        createdAt: '2020-01-01',
      },
    ],
  },
}
