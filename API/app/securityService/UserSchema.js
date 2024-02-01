const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRound = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
		type: String,
		trim: true,		
		required: true,
	},
	name: {
		type: String,
		trim: true,
		required: true
	},
	firstname: {
		type: String,
		trim: true,
		required: false
	},
    email: {
		type: String,
		trim: true,		
		required: true,
		unique: true
	},
	role: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	}
});

UserSchema.pre('save', function(next){
	this.password = bcrypt.hashSync(this.password, saltRound);
	next();
});

module.exports = mongoose.model('User', UserSchema);