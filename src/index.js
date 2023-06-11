const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


require('./config/express')(app);
require('./config/routes')(app);

app.use(homeController); 
app.use('/cubes', cubeController);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
