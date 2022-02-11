const express = require('express');
const router = express.Router();

const {
  getAllAccountings,
  createNewAccounting,
  changeAccounting,
  deleteAccounting
} = require("../controllers/accounting.controller");

router.get("/allAccountings", getAllAccountings);
router.post("/createAccountings", createNewAccounting);
router.patch("/changeAccounting", changeAccounting);
router.delete("/deleteAccounting", deleteAccounting);

module.exports = router;
