const express    = require('express');
const bodyParser = require('body-parser');
const apiRouter  = require('./routes/api');
const cors       = require('cors');

//Initialize
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());


//Routes
app.use('/api', apiRouter);

app.get('/', function(req, res) {
    res.send('hello world');
  });

//Listen
app.listen(app.get('port'), () => {
 console.log(`Servidor corriendo en http://localhost:${app.get('port')}`)
} )