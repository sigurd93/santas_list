require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
import { allowedNodeEnvironmentFlags } from "process";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"))

