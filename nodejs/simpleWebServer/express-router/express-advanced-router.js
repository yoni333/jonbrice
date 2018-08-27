
var data = require('./data')
console.log('data', data)
var express = require('express');
const port = 5500;
var app = express();

var routerEvents = express.Router();    // get an instance of the express Router

// invoked for any requests passed to this router
routerEvents.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    console.log('url:',req.url);
    console.log('method:',req.method);
    console.log('params:',req.params);
    res.header('Content-Type', 'application/json');
    next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
routerEvents.get('/events', function (req, res, next) {
   res.send(data.events);           
});



var routerProjects = express.Router();    // get an instance of the express Router

// invoked for any requests passed to this router
routerProjects.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    console.log('url:',req.url);
    console.log('method:',req.method);
    console.log('params:',req.params);
    res.header('Content-Type', 'application/json');

    next();
});

// will handle any request that ends in /events
// depends on where the router is "use()'d"
routerProjects.get('/single/:id', function (req, res, next) {
    let id = req.params.id;
    let answer = data.projects.filter(project=>project.id=== parseInt(id))
   res.send(answer)
});

routerProjects.get('/all', function (req, res, next) {
    let id = req.params.id;
    let answer = data.projects
   res.send(answer)
});
// only requests to /calendar/* will be sent to our "router"
app.use('/calander', routerEvents);
app.use('/projects', routerProjects);
app.use('/api/v1/projects',routerProjects)
app.listen(port)