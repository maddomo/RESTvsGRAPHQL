import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: () => prisma.user.findMany(),
    posts: () => prisma.userPosts.findMany(),
  },
  User: {
    posts: (parent) =>
      prisma.userPosts.findMany({
        where: { user_id: parent.id },
      }),
  },
  Post: {
    user: (parent) =>
      prisma.user.findUnique({
        where: { id: parent.user_id},
      }),
  },
};
