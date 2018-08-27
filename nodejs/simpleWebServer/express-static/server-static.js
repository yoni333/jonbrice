//npm dependencies  - express , body-parser 

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'))

app.get('/hello', function (req, res) {
    res.send('Hello World!')
})


app.get('/team', function (req, res) {
    res.send('Hello World!')
})


app.get('/data', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.json(
        {
            team: [
                { name: 'yuval', age: 32, job: 'fed' },
                { name: 'ron', age: 21, job: 'devops' }
            ]
        }
    );
})



app.listen(3000);
console.log('Server is running on port 3000...');