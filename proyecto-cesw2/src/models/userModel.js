const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    cedula: {type: Number, required: true, unique: true},
    fullName: {type: String, required: true},
    number: {type: Number, required: true},
    email: {type:String, required:true},
    company: {type:String, required: true}, 
    workArea: {type: String, required: true}
});

module.exports=mongoose.model('User', UserSchema);