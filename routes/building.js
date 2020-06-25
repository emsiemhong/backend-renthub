var express = require("express");
const buildingController = require("../controllers/buildingController");

var router = express.Router();

router.get("/", buildingController.getBuildings);
router.get("/:id", buildingController.getBuilding);
// router.post("/", buildingController.buildingStore);
// router.put("/:id", buildingController.buildingUpdate);
// router.delete("/:id", buildingController.buildingDelete);

module.exports = router;