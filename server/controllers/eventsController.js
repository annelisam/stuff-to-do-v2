const db = require('../models/index.js');
const request = require('request');

async function get(req, res) {
  try {
    let events;
    if (req.params.id) {
      events = await db.Event.findAll({ where: { id: req.params.id } });
    } else {
      events = await db.Event.findAll({});
    }
    console.log(events);
    res.status(200).json(events);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

async function post(req, res) {
  const { name, description, urlPhoto, dateTime, address, city, state, zipCode, UserId } = req.body;
  const fullAddress = address + ' ' + city + ' ' + state + ' ' + zipCode;
  const geoLocation = request(`https://maps.googleapis.com/maps/api/geocode/json?address=${fullAddress}&key=AIzaSyDsfnjM905ho9lC-EwFVAI8oOUivynhT9g`, async (error, response, body) => {

  const newEvent = {
      name,
      description,
      urlPhoto,
      UserId,
      dateTime,
      address,
      city,
      state,
      zipCode,
      lat: JSON.parse(body).results[0].geometry.location.lat,
      lng: JSON.parse(body).results[0].geometry.location.lng,
    }
    try {
      const eventData = await db.Event.create(newEvent);
      res.status(200).json(eventData);
    } catch (error) {
      if (error.message) {
        console.error(error.message);
      }
      console.log(err);
      res.status(500).send('There was an error on the server');
    }
  })
}

async function put(req, res) {
  const { name, description, urlPhoto, date, address, city, state, zipCode, id } = req.body;
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
