const userSchema = require('./UserSchema');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');	

require('dotenv').config();

const PROFIL_ROLE = require('../role/role');
const jobDetail = require('../../employeeService/jobDetail/UserJobDetailSchema');



module.exports = {
	create: function(req, res, next) {
        if(req.body.role == PROFIL_ROLE.EMPLOYEE) next({status: "error", message: `You can't create this profil user, please try again!`});
		else userSchema.create({ 
            username: req.body.username,
            name: req.body.name, 
            firstname: req.body.firstname,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password 
        }).then((result) => {
            const token = jwt.sign({id: result._id}, process.env.SECRET_KEY, { expiresIn: '1h' }); 
            res.json({status:"success", message: `Hi ${result.username}, welcome to your favourit barber shop`, data:{user: result, token:token}});
        }).catch((err) => {
            next(err);
        });
	},

    createEmploye: function(req, res, next) {
		userSchema.create({ 
            username: req.body.username,
            name: req.body.name, 
            firstname: req.body.firstname,
            role: PROFIL_ROLE.EMPLOYEE,
            email: req.body.email,
            password: req.body.password 
        }).then((result) => {
            jobDetail.create({
                employee : result._id,
                jobTitle : req.body.jobTitle,
                salaryPerHour : req.body.salaryPerHour,
            }).then((result2) => {
                res.json({status: "success", message: `The account for Mr/Mrs ${req.body.username} has been created`, data: {user : result, jobDetail : result2}});
            })
        }).catch((err) => {
            next(err);
        });
	},

	authenticate: function(req, res, next) {
		userSchema.findOne({email:req.body.email})
        .then((userInfo) => {
            if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({id: userInfo._id}, process.env.SECRET_KEY, { expiresIn: '1h' }); 
                res.json({status:"success", message: `Hi ${userInfo.username}, please to see you again`, data:{user: userInfo, token:token}});	
            }else{
                res.json({status:"error", message: "Oupss! Invalid email or password", data:null});
            }
        })
        .catch((err) => {
            next(err);
        });
	},
}