const db = require('../models/index.js');
const request = require('request');

async function get(req, res) {
  try {
    if (req.params.id) {
      const events = await db.Event.findAll({ where: { id: req.params.id } });
      res.status(200).json(events);
    } else {
      const lat = req.query.lat;
      const lng = req.query.lng;
      const events = await db.Event.findAll({});
      const sendEvents = events.filter(theEvent => {
        return getDistanceFromLatLonInKm(lat, lng, theEvent.lat, theEvent.lng) < 200;
      });
      res.status(200).json(sendEvents);
    }
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.error(err);
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
    };
    try {
      const eventData = await db.Event.create(newEvent);
      res.status(200).json(eventData);
    } catch (error) {
      if (error.message) {
        console.error(error.message);
      }
      console.error(err);
      res.status(500).send('There was an error on the server');
    }
  });
}

async function put(req, res) {
  const { name, description, urlPhoto, dateTime, address, city, state, zipCode, id, upVotes } = req.body;
  const updatedEvent = {
    name,
    description,
    urlPhoto,
    dateTime,
    address,
    city,
    state,
    zipCode,
    upVotes,
  };

  try {
    const data = await db.Event.update(updatedEvent,
      {
        where: {
          id: id,
        }
      });
    res.status(200).json(data);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.error(err);
    res.status(500).send('There was an error on the server');
  }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

const eventsController = {
  get,
  post,
  put,
};

module.exports = eventsController;
