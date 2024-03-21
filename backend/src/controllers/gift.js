const giftRouter = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

giftRouter.get("/list", (req, res) => {
  const response = {
    data: [],
    error: null,
  };
  prisma.Gift.findMany()
    .then((results) => {
      response.data = results;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

giftRouter.post("/create", (req, res) => {
  const data = req.body;

  const response = {
    data: [],
    error: null,
  };

  prisma.Gift.create({ data })
    .then((user) => {
      response.data = user;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

giftRouter.patch("/update/:id", (req, res) => {
  const data = req.body;
  const targetId = req.params.id;
  const updates = {
    where: {
      id: +targetId,
    },
    data,
  };
  const response = {
    data: [],
    error: null,
  };

  prisma.Gift.update(updates)
    .then((result) => {
      response.data = result;
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      response.error = error;
      res.status(500).json(response);
    });
});

module.exports = giftRouter;
