const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./controllers/user");
const giftRouter = require("./controllers/gift");
const giftUserRel = require("./controllers/user_gift_rel");
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/gift", giftRouter);
app.use("/gift-user-rel", giftUserRel);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
