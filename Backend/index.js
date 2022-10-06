require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
import { allowedNodeEnvironmentFlags } from "process";
const db = require("../Backend/classes/database")

dbinterface = db();
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"))

app.get('/events', function (req, res) {
    const result = dbinterface.GetByOrgName(req)
    res.send(result)
    })

    app.get('/company', function (req, res) {
    
    })

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
    })
    
