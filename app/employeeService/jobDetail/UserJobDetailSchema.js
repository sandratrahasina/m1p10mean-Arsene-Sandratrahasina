const mongoose = require('mongoose');
const UserSchema = require('../../securityService/user/UserSchema');

const Schema = mongoose.Schema;

const UserJobDetailSchema = new Schema({
    employee : {
        type : mongoose.Schema.ObjectId,
        ref : UserSchema,
        required : true
    },
    jobTitle : {
        type : String,
        trim : true,
        required : true
    },
    userDescription : {
        type : String,
        trim : true,
        default : ''
    },
    salaryPerHour : {
        type : Number,
        trim : true,
        required : true
    },
    profilPhotoUrl : {
        type : String,
        trim : true,
        required : false
    },
    portfolioPictureUrl : [{
        type : String,
        trim : true,
        required : false
    }]
});

module.exports = mongoose.model('JobDetail', UserJobDetailSchema);