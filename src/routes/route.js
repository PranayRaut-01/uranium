const express = require("express");
const router = express.Router();
const allControllers = require("../controllers/allController");

router.get("/cowin/getVaccineSession", allControllers.getVaccineSession);
router.get("/getWhether", allControllers.getWhether);
router.post("/getMemes", allControllers.getMemes);
router.get("/sortedCities", allControllers.sortedCities);

module.exports = router;
