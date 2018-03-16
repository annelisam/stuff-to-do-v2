const db = require('../models/index.js');

async function get(req, res) { 
  console.log(db);
  try {
    let events;
    if(req.params) {
      events = await db.Event.findAll({ where: { id: req.params.id } });
    } else {
      events = await db.Event.findAll({});            
    }
    res.status(200).send(events);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

async function post(req, res) {
  const {name, description, urlPhoto, date, address, city, state, zipCode} = req.body;
  const newEvent = {
    name, 
    description,
    urlPhoto,
    date,    
    address,
    city,
    state,
    zipCode,
  }
  try {
    const eventData = await db.Event.create(newEvent);

    res.status(200).json(evetnData);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

async function put(req, res) {
  const {name, description, urlPhoto, date, address, city, state, zipCode, id} = req.body;
  const updatedEvent = {
    name, 
    description,
    urlPhoto,
    date,
    address,
    city,
    state,
    zipCode,
  }

  try {
    const data = await db.Event.update(updatedEvent,
    {
      where: {
        id: id,
      }
    })
    res.status(200).json(data);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

const eventsController = {
  get,
  post,
  put,
}

module.exports = eventsController;
