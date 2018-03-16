const userController = require('../controllers/userController.js');
const express = require('express');

const router = express.Router();

router.route('api/user/:id?').get(userController.get);
router.route('api/user').post(userController.post);
router.route('api/user').put(userController.put);

module.exports = router;
