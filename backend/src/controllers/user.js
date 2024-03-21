const userRouter = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

userRouter.get("/list", (req, res) => {
  const response = {
    data: [],
    error: null,
  };
  prisma.User.findMany()
    .then((users) => {
      response.data = users;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

userRouter.post("/register", (req, res) => {
  const data = req.body;

  const response = {
    data: [],
    error: null,
  };

  prisma.User.create({ data })
    .then((user) => {
      response.data = user;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

userRouter.patch("/update/:id", (req, res) => {
  const data = req.body;
  const userId = req.params.id;
  const updates = {
    where: {
      id: +userId,
    },
    data,
  };
  const response = {
    data: [],
    error: null,
  };

  prisma.User.update(updates)
    .then((user) => {
      response.data = user;
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      response.error = error;
      res.status(500).json(response);
    });
});

module.exports = userRouter;
