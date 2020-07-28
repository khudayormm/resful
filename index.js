const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const config = require('config');
const animals = require('./routes/animals');
const home = require('./routes/home');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/animals', animals);
app.use('/', home);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Logger ishlayapti...');
}

console.log(config.get('name'));
console.log(config.get('mailserver.host'));
//console.log(config.get('mailserver.password'));

// app.use(logger.middle);
app.use(logger.authen);
app.use(helmet());
console.log(process.env.NODE_ENV); 
console.log(app.get('env'));


  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`${PORT} server is running ...`);
})