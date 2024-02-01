const userSchema = require('./UserSchema');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');				

module.exports = {
	create: function(req, res, next) {
		userSchema.create({ 
            username: req.body.username,
            name: req.body.name, 
            firstname: req.body.firstname,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password 
        }).then((result) => {
            res.json({status: "success", message: `Welcome ${req.body.username}`, data: null});
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