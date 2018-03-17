const db = require('../models/index.js');

async function get(req, res) {
  try {
    console.log(db.User);    
    const user = db.User.findOne({ 
      where: { email: req.body.email },
      include: [db.Event],
    })
    res.status(200).send(user);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

async function post(req, res) {
  const {name, email, company} = req.body;
  const newUser = {
    name, 
    email, 
    company,
  }
  try {
    const data = await db.User.create(newUser);
    res.status(200).json(data);
  } catch (error) {
    if (error.message) {
      console.error(error.message);
    }
    console.log(err);
    res.status(500).send('There was an error on the server');
  }
}

async function put(req, res) {
  const {name, email, company, id} = req.body;
  const updatedUser = {
    name, 
    email, 
    company,
  }
  try {
    const data = await db.User.update(updatedUser,
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

const userController = {
  get,
  post,
  put,
}

module.exports = userController;
