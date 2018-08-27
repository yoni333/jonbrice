//npm dependencies  - express , body-parser 

var express = require('express');

var app = express();

app.use(express.static('public')) //magic line to serve files

app.get('/hello', function (req, res) {
    res.send('Hello World!')
})


app.get('/team', function (req, res) {
    res.set('Content-Type', 'text/html');
    let answer= '<h4>Hello World!</h4>';
    answer+='<p>our team</p>'
    res.send(answer) 
    
})


app.listen(3000);
console.log('Server is running on port 3000...');