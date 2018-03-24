const db = require('../models/index.js');

async function get(req, res) {
  try {
    const lat = req.query.lat;
    const lng = req.query.lng;

    const allEvents = await db.Event.findAll({});
    const sendEvents = allEvents.filter(theEvent => {
      return getDistanceFromLatLonInKm(lat, lng, theEvent.lat, theEvent.lng) < 200;
    })
    console.log(sendEvents);
    res.render('results', {events: sendEvents});
  } catch(error) {
    if(error.message) {
      console.error(error.message);
    }
    console.error(error.message);
  }
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const htmlController = {
  get,
}

module.exports = htmlController;

