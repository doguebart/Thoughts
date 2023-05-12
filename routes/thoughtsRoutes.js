const express = require("express");
const router = express.Router();

const ThoughtsController = require("../controller/ThoughsController");

router.get("/", ThoughtsController.showThoughts);

module.exports = router;
