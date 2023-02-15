import express from "express";
import config from "./config/config.js";
import { start } from "./config/db.js";
import eVTOLRoute from "./routes/eVTOLRoute.js";
import bodyParser from "body-parser";
import cors from "cors"; 

const PORT = config.PORT
const BASE_URL = config.BASE_URL
start();

const app = express();

//Middlewares
app.use(cors())
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use("/", eVTOLRoute)

//LISTENING TO SERVER
app.listen(PORT, () => {
    console.log(`🛩️  Server Started @${BASE_URL}:${PORT}`);
})

//API Call
app.get("/", (req, res) => {
    res.render("index")
});