const jobDetail = require('./UserJobDetailSchema');

module.exports = {
    create: function(req, res, next){
        jobDetail.create({
            employee : req.body.employee,
            jobTitle : req.body.jobTitle,
            salaryPerHour : req.body.salaryPerHour,
        }).then((result) => {
            res.json({status: "success", message: `Welcome ${req.body.employee.username}`, data: result});
        }).catch((err) => {
            next(err);
        });
    },

    updateById: function(req, res, next){
        jobDetail.findByIdAndUpdate(req.body._id, {
            userDescription : req.body.userDescription,
            profilPhotoUrl : req.body.profilPhotoUrl,
            portfolioPictureUrl : req.body.portfolioPictureUrl
        }).then((result) => {
            res.json({status: "success", message: ` ${req.body.employee.username} , your emloyee information has been updated with success`, data: result});
        }).catch((err) => {
            next(err);
        });
    },

    getAllEmployee: function(req, res, next){
        jobDetail.find()
        .populate('employee')
        .then((result) => {
            res.json({status: "success", message: `List of employe`, data: result});
        })
        .catch((err) => {
            next(err);
        });
    }

};