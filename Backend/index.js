require('dotenv').config()
const express = require("express");
const db = require("../Backend/classes/database")

dbinterface = new db();
const app = express();

const server = app.listen(3000, () => {

    console.log("Example app listening at port 3000");
})
    
app.get('/events', async function (req, res) {
    const result = await dbinterface.GetEventByOrgNumber(req.query.org)
    res.send(result)
    })

app.get('/company', async function (req, res) {
    const result = await dbinterface.GetByOrgName(req.query.name);
    res.send(result);
})

app.get('/', async function (req, res) {
    const result =  await dbinterface.GetOrg();
    res.send(result);
})

