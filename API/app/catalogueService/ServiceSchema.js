const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductServicesSchema = new Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    price : {
        type : Number,
        trim : true,
        required : true
    },
    durationInMinutes : {
        type : Number,
        trim : true,
        required : true
    },
    photoUrl : {
        type : String,
        trim : true,
        required : false
    },
    commissionPercentage : {
        type : Number,
        trim : true,
        required : false
    },
    isValid : {
        type : Boolean,
        trim : true,
        default : true
    }
});

module.exports = mongoose.model('productServices', ProductServicesSchema);