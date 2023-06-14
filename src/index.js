const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const dbConnection = require('./config/dbConfig')

require('./config/express')(app);
require('./config/routes')(app);

dbConnection()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => console.log('DB error:', err))

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));





