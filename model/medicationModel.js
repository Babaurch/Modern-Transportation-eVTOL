import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
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
},{
    timestamps:true,
    toJSON:{virtuals:true}
});

const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;