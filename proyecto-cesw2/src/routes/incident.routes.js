const express = require('express');
const routerIncident = express.Router();
const Incident = require('../models/incidentModel');

//read
routerIncident.get('/', async (req, res) => {
    const incidents = await Incident.find();
    console.log(incidents);
    res.status(200).json(incidents);
});

//read one
routerIncident.get('/:id', async (req, res) => {
    const incident = await Incident.find({ id: req.params.cedula });
    res.status(200).json(incident);
})

//create
routerIncident.post('/', async (req, res, next) => {
    const { idIncident,
        descriptionIncident,
        typeIncident,
        stuatusIncident,
        trivialIncident,
        resolutionIncident,
        specialist,
        dateIncident } = req.body;

    try {
        const incident = new Incident({
            idIncident,
            descriptionIncident,
            typeIncident,
            stuatusIncident,
            trivialIncident,
            resolutionIncident,
            specialist,
            dateIncident
        });
        await incident.save();
        console.log(incident);
        res.status(200).json({ status: 'incident created' });
    } catch (error) {
        next(error);
    }
});

//update
routerIncident.put('/:id', async (req, res, next) => {
    const { idIncident,
        descriptionIncident,
        typeIncident,
        stuatusIncident,
        trivialIncident,
        resolutionIncident,
        specialist,
        dateIncident } = req.body;

    try {
        const newIncident = {
            idIncident,
            descriptionIncident,
            typeIncident,
            stuatusIncident,
            trivialIncident,
            resolutionIncident,
            specialist,
            dateIncident
        };
        await Incident.findOneAndUpdate({ id: req.params.id }, newIncident);
        res.status(200).json({ status: 'incident update' })
    } catch (error) {
        next(error);
    }
});

//delete
routerIncident.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Incident.findByIdAndDelete({ id: id });
        res.status(200).json({ status: 'incident deleted' })
    } catch (error) {
        console.log(error);
    }
});

module.exports = routerIncident;


