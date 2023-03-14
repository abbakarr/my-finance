const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")

dotenv.config({path: "./config/config.env"});

const app = express();

app.get('./', (req, res) => res.send('Hello Duniya')) 

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold)); 

