var express = require("express");
const apiResponse = require("../helpers/apiResponse");
const Building = require("../models/Building");
//const buildingController = require("../controllers/buildingController");

var router = express.Router();
router.get("/", async(req, res) => {
    const buildings = await Building.find();
    return apiResponse.successResponseWithData(res, "Success", buildings);
});
//router.get("/", buildingController.getBuildings);
//router.get("/:id", buildingController.getBuilding);
// router.post("/", buildingController.buildingStore);
// router.put("/:id", buildingController.buildingUpdate);
// router.delete("/:id", buildingController.buildingDelete);

module.exports = router;