const express = require("express");
const router = express.Router();
const bachelorController = require("../controllers/bachelor.js");

router.get("/", bachelorController.index);
router.get("/year/:year", bachelorController.showYear);
router.get("/name/:name", bachelorController.showName);
router.post("/", bachelorController.create);
router.patch("/name/:name", bachelorController.edit);
router.delete("/name/:name", bachelorController.delete);

module.exports = router;
