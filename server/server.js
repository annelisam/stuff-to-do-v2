const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(eventsRoutes);
app.use(usersRoutes);
app.use(express.static('../client'));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
