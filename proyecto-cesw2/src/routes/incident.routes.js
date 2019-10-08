const express = require('express');
const routerIncident = express.Router();
const Incident = require('../models/incidentModel');

//read
routerIncident.get('/', async(req,res)=>{
    const incidents = await Incident.find();
    console.log(incidents);
    res.status(200).json(incidents);
});

//read one
routerIncident.get('/:id', async(req,res)=>{

})