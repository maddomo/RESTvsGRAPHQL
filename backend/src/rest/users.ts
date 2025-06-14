import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get("/posts", async (req, res) => {
  const posts = await prisma.userPosts.findMany();
  res.json(posts);
})

export default router;
