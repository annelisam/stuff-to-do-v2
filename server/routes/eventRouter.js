const eventsController = require('../controllers/eventsController.js');
const express = require('express');

const router = express.Router();

<<<<<<< Updated upstream
router.route('api/events/:id?').get(eventsController.get);
router.route('api/events').post(eventsController.post);
router.route('api/events').put(eventsController.put);
=======
router.route('/api/events/:id?').get(eventsController.get);
router.route('/api/events').post(eventsController.post);
router.route('/api/events').put(eventsController.put);
>>>>>>> Stashed changes

module.exports = router;
