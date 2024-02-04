const express = require('express');
const router = express.Router();

const jobDetailController = require('./UserJobDetailController');

router.post('/create', jobDetailController.create);
router.post('/update_by_employee', jobDetailController.updateById);
router.get('/fetch_employee', jobDetailController.getAllEmployee);

module.exports = router;
