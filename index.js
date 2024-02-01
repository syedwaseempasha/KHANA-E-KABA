import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/databse/db.js";


const app = express();
dotenv.config({
    path: '/env'
})

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

connectDB()
.then(() =>{
    const port = process.env.PORT || 5000
    app.listen(process.env.port, () =>{
        console.log(`server is running on port : ${port} `);
    })
})
.catch((err) =>{
    console.log("mongoDB connection failed !!!", err);
})