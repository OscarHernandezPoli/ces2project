const mongoose = require('mongoose');
const {Schema} = mongoose;

const IncidentSchema = new Schema({

});

module.exports=mongoose.model('Incident', IncidentSchema);