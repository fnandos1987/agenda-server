const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pessoas = require('./pessoas');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/pessoas', (req, res) => {
    res.send(pessoas.lista());
});

app.get('/pessoa/:id', (req, res) => {
    res.send(pessoas.porId(req.params.id));
});


app.post('/logar', (req, res) => {
    res.send((req.body.user == 'fernando' && req.body.pass == '123456'));	
});

app.listen(3000, function() {
	console.log('listen in port 3000')
})
