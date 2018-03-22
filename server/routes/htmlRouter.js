const express = require('express');
const htmlController = require('../controllers/htmlController.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
})

router.route('/events').get(htmlController.get);

module.exports = router;
