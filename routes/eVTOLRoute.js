import express from "express";
import {eVTOLRegisterController, eVTOLLoadingController, isAvailableController, eVTOLBatteryController} from "../controller/eVTOLcontroller.js"

const eVTOLRoute = express.Router();

//Register an eVTOL
eVTOLRoute.post("/evtol", eVTOLRegisterController)

//Load an eVTOL with Medication
eVTOLRoute.put("/evtol/:serialNumber/load", eVTOLLoadingController)

//Check Available eVTOL for Loading
eVTOLRoute.get("/evtol/available", isAvailableController)

//Check eVTOL Battery
eVTOLRoute.get("/evtol/:serialNumber/battery", eVTOLBatteryController)



export default eVTOLRoute;