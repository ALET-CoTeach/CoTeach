const express = require("express");
router = express.Router();
usersRoute = require("../controllers/usersController")

router.get("/", usersRoute.usersController)

module.exports = router;