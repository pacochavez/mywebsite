var express = require('express'),
    modulos = require('./app/server/routes/modulos');
var bodyParser = require('body-parser')

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/app/public'));

app.get('/admin', modulos.home);
app.get('/data/:data',modulos.findAll)
app.get('/home', modulos.home);
app.get('/modulos', modulos.findAll);
app.get('/modulos/:id', modulos.findById);
app.post('/modulos', modulos.addModulo);
app.put('/modulos/:id', modulos.updateModulo);
app.delete('/modulos/:id', modulos.deleteModulo);

app.listen(3030);
console.log('Listening on port 3030...');