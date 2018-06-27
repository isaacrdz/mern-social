const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@description Test users routes
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
