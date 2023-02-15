import mongoose from "mongoose";
import Evtol from "../model/eVTOLmodel.js";
import Medication from "../model/medicationModel.js";



// Endpoint to register an eVTOL
export const eVTOLRegisterController = async (req, res) => {
    const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
    try {
        const eVTOL = await Evtol.create({
            serialNumber, 
            model, 
            weightLimit, 
            batteryCapacity, 
            state
        })
        res.json({
            status: "Success",message:("eVTOL registered successfully"),
            data: eVTOL
        })  
    } catch (error) {
        res.json(error.message)        
    }
    
}

//Endpoint to Load an eVTOL
export const eVTOLLoadingController = async (req, res) => {
    const {serialNumber} = req.params;
    try {
        const evtolFound = await Evtol.findOne({serialNumber});
        if(!evtolFound){
            return res.status(400).send("eVTOL Not Found");
            // return;
        }
        const isAvailable = async (req, res) => {
           await Evtol.findOne({ serialNumber })
           .then((res)=>{
            // console.log(res.state);
            res.state;
           });
        //    console.log(state);
            // return state === "IDLE";
        };
        if(!isAvailable(Evtol)){
           return res.status(400).send("eVTOL is Not Available for Loading");
            // return;
        }
        // const medicazion = {
        //     name: req.body.name,
        //     weight: req.body.weight,
        //     code: req.body.code,
        //     image: req.body.image
        // };
        Evtol.updateOne({serialNumber},{
          $set:{
            medication: [{
                name: req.body.name,
                weight: req.body.weight,
                code: req.body.code,
                image: req.body.image
            
            }],
          } 
        });
        // Evtol.updateOne({medication});
        // Evtol.medication.push(medication);
        // Evtol.state = "LOADED";
        res.status(200).send("Medication loaded Successfully");
        console.log(medication);
    } catch (error) {
        console.log(error.message);
        
    };
}


//Endpoint to Check Available eVTOL for Loading
export const isAvailableController = async (req, res) => {
    await Evtol.find({"state": "IDLE"}, {"serialNumber":1,"batteryCapacity":1})
    .then((res)=>{
        // res.filter("IDLE")
        // res.json(res);
        console.log(res);
        return res;
        
        
    })
    // let availableEvtols = Evtol.filter("IDLE");
    // res.status(200).json(availableEvtols);
    // console.log(availableEvtols);
}


//Endpoint to check eVTOL Battery
export const eVTOLBatteryController = async (req, res) => {
    const {serialNumber} = req.params;
    try {
        const evtolFound = await Evtol.findOne({serialNumber});
        if (!evtolFound) {
             res.status(400).send("eVTOL not found");
             return;
         }
         await Evtol.find({"serialNumber": serialNumber}, {"batteryCapacity":1,"_id":0})
         .then(result => {
            
           let batteryCapacity = result;
           ("#content").text(batteryCapacity);
           console.log(batteryCapacity);
           res.status(200).send(`Battery level: ${batteryCapacity}%`);

            // result.json(`Battery level: ${Evtol.batteryCapacity}%`);
         })
    } catch (error) {
        console.log(error.message);        
    }
}