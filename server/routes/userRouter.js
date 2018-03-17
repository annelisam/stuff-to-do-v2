const userController = require('../controllers/userController.js');
const express = require('express');

const router = express.Router();

<<<<<<< Updated upstream
router.route('api/user/:id?').get(userController.get);
router.route('api/user').post(userController.post);
router.route('api/user').put(userController.put);
=======
router.route('/api/user/:id?').get(userController.get);
router.route('/api/user').post(userController.post);
router.route('/api/user').put(userController.put);
>>>>>>> Stashed changes

module.exports = router;
