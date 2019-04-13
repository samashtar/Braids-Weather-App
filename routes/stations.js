const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("hello"));

router.get("/:id", (req, res) => res.send("lul"));

module.exports = router;
