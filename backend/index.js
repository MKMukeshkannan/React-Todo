import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const PORT = process.env.PORT || 6969;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/data", (req, res, next) => {
  async function getData() {
    const tasks = await prisma.Tasks.findMany();
    res.send(tasks);
  }
  getData().catch((error) => next(error));
});

app.post("/data", (req, res, next) => {
  if (
    !req.body.id ||
    !req.body.description ||
    typeof req.body.checked !== "boolean"
  )
    return next({ status: 400, message: "Bad Request" });

  async function postData() {
    const task = await prisma.Tasks.create({
      data: req.body,
    });
    res.json(task);
  }

  postData().catch((err) => next(err));
});

app.delete("/data/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  async function deleteData() {
    const task = await prisma.Tasks.delete({
      where: {
        id,
      },
    });
    res.json(task);
  }

  deleteData().catch((err) => next(err));
});

app.put("/data", (req, res, next) => {
  if (!req.body.id || typeof req.body.checked !== "boolean")
    return next({ status: 400, message: "Bad Request" });
  async function updateData() {
    const task = await prisma.Tasks.update({
      where: {
        id: req.body.id,
      },
      data: req.body,
    });
    res.json(task);
  }

  updateData().catch((err) => next(err));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    success: false,
  });
  next();
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listen at PORT ${process.env.PORT || PORT}`);
});
