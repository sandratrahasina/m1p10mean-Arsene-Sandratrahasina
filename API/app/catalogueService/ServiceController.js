const productServices = require('./ServiceSchema');

module.exports = {
    create: function(req, res, next){
        productServices.create({
            name : req.body.name,
            price : req.body.price,
            durationInMinutes : req.body.durationInMinutes,
            photoUrl : req.body.photoUrl,
            commissionPercentage : req.body.commissionPercentage
        }).then((result) => {
            res.json({status: "success", message: `Product service created successful`, data: result});
        }).catch((err) => {
            next(err);
        });
    },

    updateById: function(req, res, next){
        productServices.findByIdAndUpdate(req.body._id, {
            name : req.body.name,
            price : req.body.price,
            durationInMinutes : req.body.durationInMinutes,
            photoUrl : req.body.photoUrl,
            commissionPercentage : req.body.commissionPercentage,
            isValid : req.body.isValid
        }).then((result) => {
            res.json({status: "success", message: ` ${req.body.employee.username} , your emloyee information has been updated with success`, data: result});
        }).catch((err) => {
            next(err);
        });
    },

    getAllService: function(req, res, next){
        productServices.find()
        .then((result) => {
            res.json({status: "success", message: `List of services`, data: result});
        })
        .catch((err) => {
            next(err);
        });
    },

    getAvailableService: function(req, res, next){
        productServices.find({isValid : true})
        .then((result) => {
            res.json({status: "success", message: `List of available services`, data: result});
        })
        .catch((err) => {
            next(err);
        });
    }

};