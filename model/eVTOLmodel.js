import mongoose from "mongoose";

const eVTOLSchema = new mongoose.Schema({
    serialNumber: {
        type: Number,
        required: [true, "SerialNumber is Required"],
        maxlength: [100, "SerialNumber cannot be longer than 100 characters"]
    },
    model: {
        type: String,
        required: [true, "Model is Required"],
        enum: ["Lightweight", "Middleweight", "Cruiserweight", "Heavyweight"],
        default: "Lightweight"
    },
    weightLimit: {
        type: Number,
        required: [true, "Weight Limit is Required"],
        max: [500, "Weight Limit cannot exceed 500 grams"]
    },
    batteryCapacity: {
        type: Number,
        required: [true, "Battery Capacity is Required"],
        min: [0, "Battery Capacity cannot be less than 0"],
        max: [100, "Battery Capacity cannot be greater than 100"]
    },
    state: {
        type: String,
        required: [true, "State is Required"],
        enum: ["IDLE", "LOADING", "LOADED", "DELIVERING", "DELIVERED", "RETURNING"],
        default: "IDLE"
    },
    medication: [{
        name: {
            type: String,
            required: [true, "Name is Required"],
            match: [/^[a-zA-Z0-9-_]+$/, "Name can only contain letters, numbers, '-', and '_'"]
        },
        weight: {
            type: Number,
            required: [true, "Weight is Required"],
            min: [0, "Weight cannot be less than 0"]
        },
        code: {
            type: String,
            required: [true, "Code is Required"]
        },
        image: {
            type: String,
            required: [true, "Image is Required"]
        },
    
    }],
},{
    timestamps:true,
    toJSON:{virtuals:true}
});

const Evtol = mongoose.model("Evtol", eVTOLSchema);
export default Evtol