const db = require('../models/index.js');

async function get(req, res) {
  try {
    let events;
    if(req.params) {
      events = await db.Events.findAll({ where: { id: req.params.id } });
    } else {
      events = await db.Events.findAll({});            
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
  const {name, description, urlPhoto, date} = req.body
  try {
    let events;
    if(req.params) {
      events = await db.Events.create();
    } else {
      events = await db.Events.findAll({ where: { id: req.params.id } });      
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

// async function get(req, res) {
//   try {
//     let events;
//     if(req.params) {
//       events = await db.Events.findAll({});
//     } else {
//       events = await db.Events.findAll({ where: { id: req.params.id } });      
//     }
//     res.status(200).send(events);
//   } catch (error) {
//     if (error.message) {
//       console.error(error.message);
//     }
//     console.log(err);
//     res.status(500).send('There was an error on the server');
//   }
// }
