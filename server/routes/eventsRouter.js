const eventsController = require('../controllers/eventsController.js');
const express = require('express');

const router = express.Router();

router.route('api/events/:id?').get(eventsController.get);
router.route('api/events').post(eventsController.post);
router.route('api/events').patch(eventsController.patch);