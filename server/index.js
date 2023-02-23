import express from "express";
import Routes from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";


import dotenv from "dotenv";

import Connection from "./database/db.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/", Routes);


const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username, password);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))