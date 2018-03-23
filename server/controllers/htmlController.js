const db = require('../models/index.js');

async function get(req, res) {
  try {
    const allEvents = await db.Event.findAll({});
    res.render('results', {allEvents});
  } catch(error) {
    if(error.message) {
      console.error(error.message);
    }
    console.error(error.message);
  }
}

const htmlController = {
  get,
}

module.exports = htmlController;

