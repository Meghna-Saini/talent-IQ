// const express = require("express")  [IN commonjs type]
import express from "express";     //[Modern way]
//import dotenv from "dotenv";
import {ENV} from "./lib/env.js"
//dotenv.config();

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/health",(req,res) =>{
  res.status(200).json({msg:"api is up"});
})

app.listen(ENV.PORT, () => console.log("Server is running on port",ENV.PORT));
