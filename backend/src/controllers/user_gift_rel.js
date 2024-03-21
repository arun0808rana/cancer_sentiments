const giftUserRel = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

giftUserRel.post("/create", (req, res) => {
  const data = req.body;

  const response = {
    data: [],
    error: null,
  };

  prisma.gift_user_rel
    .create({ data })
    .then((user) => {
      response.data = user;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

giftUserRel.patch("/update/:id", (req, res) => {
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

  prisma.gift_user_rel
    .update(updates)
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

giftUserRel.get("/list", (req, res) => {
  const response = {
    data: [],
    error: null,
  };
  prisma.gift_user_rel
    .findMany()
    .then((results) => {
      response.data = results;
      res.status(200).json(response);
    })
    .catch((error) => {
      response.error = error;
      res.status(500).json(response);
    });
});

module.exports = giftUserRel;
