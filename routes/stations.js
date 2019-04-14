const express = require("express");
const router = express.Router();

//  /stations
router.get("/", (req, res) => {
  res.send("/stations");
});

//  /stations/{id}
router.get("/:id", (req, res) => res.send("/stations/id"));

module.exports = router;
