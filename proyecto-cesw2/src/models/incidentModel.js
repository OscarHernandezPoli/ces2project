const mongoose = require('mongoose');
const {Schema} = mongoose;

const IncidentSchema = new Schema({
    idIncident:{type: Number, required: true, unique:true},
    descriptionIncident: {type: String, required: true},
    typeIncident: {type: String, required: true},
    stuatusIncident: {type: String, required: true},
    trivialIncident: {type: Boolean, required: true},
    resolutionIncident: {type: String, required: true},
    specialist: {type:String, required: true},
    dateIncident: {type: Date, required: true, default: Date.now} 
});

module.exports=mongoose.model('Incident', IncidentSchema);