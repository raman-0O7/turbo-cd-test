import express from "express";
import {prisma} from "db/client";

const app = express();

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    users,
    message: "Success"
  })
})

app.post("/", async (req, res) => {
  const createdUser = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })

  res.json({
    createdUser,
    message: "Success"
  })
})

app.listen(3002, () => console.log("backend started on 3002"));