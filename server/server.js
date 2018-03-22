const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const eventRoutes = require('./routes/eventRouter.js');
const userRoutes = require('./routes/userRouter.js');
const htmlRouter = require('./routes/htmlRouter.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./models/index.js');

app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(htmlRouter);
app.use(eventRoutes);
app.use(userRoutes);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
