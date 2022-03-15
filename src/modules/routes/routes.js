const express = require('express');
const router = express.Router();

const {
  getAllAccountings,
  createNewAccounting,
  changeAccounting,
  deleteAccounting,
  getOneAccounting
} = require("../controllers/accounting.controller");

const {
  register,
  signIn
} = require("../controllers/userController");

const {
  getAllBooks,
  createNewBook,
  deleteBook,
  getBook
} = require("../controllers/book.controller");

router.get("/allAccountings", getAllAccountings);
router.get("/oneAccounting", getOneAccounting);
router.post("/createAccountings", createNewAccounting);
router.patch("/changeAccounting", changeAccounting);
router.delete("/deleteAccounting", deleteAccounting);
router.post("/register", register);
router.post("/signIn", signIn);

router.get("/getAllBooks", getAllBooks);
router.post("/main/:id", getBook);
router.post("/createBook", createNewBook);
router.delete("/deleteBook", deleteBook);

module.exports = router;
