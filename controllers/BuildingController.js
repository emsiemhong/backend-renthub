const apiResponse = require("../helpers/apiResponse");
const Building = require("../models/Building");

const BuildingController = {
    getBuildings: async(req, res) => {
        const buildings = await Building.find();
        return apiResponse.successResponseWithData(res, "Success", buildings);
    },
    getBuilding: async(req, res) => {
        var data = {};

        return apiResponse.successResponseWithData(res, "Success", data);
    }
};

module.exports = BuildingController