//new commands
//routerEvents = express.Router();   
//routerEvents.use(function (req, res, next) {
    //next()
//}
//app.use('/calander', routerEvents);
//**************** */
var data = require('./data')
console.log('data', data)
var express = require('express');

var path =require('path')
var url =require('url')
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
routerProjects.get('/project/:id', function (req, res, next) {
    let id = req.params.id;
    let answer = data.projects.filter(project=>project.id=== parseInt(id))
   res.send(answer)
});

routerProjects.get('/projects', function (req, res, next) {
   
    let answer = data.projects
   res.send(answer)
});

// only requests to /calendar/* will be sent to our "router"
app.use('/calander', routerEvents);
app.use('/projects', routerProjects);
app.use('/api/v1/projects',routerProjects)

app.get("/url-path-example",function(req,res){
    let answer = `
    req.url = ${req.url}  |
    url.parse(req.url) = ${url.parse(req.url)} |
    url.parse(req.url).pathname; ${url.parse(req.url).pathname} |
    process.cwd()= ${process.cwd()} |
    __dirname  =   ${__dirname} |
    unescape(url.parse(req.url).pathname) ${unescape(url.parse(req.url).pathname)}  |
    path.join ( process.cwd() ,  unescape( url.parse(req.url).pathname; ) ); =  ${path.join ( process.cwd() ,  unescape( url.parse(req.url).pathname ) )} |

   

    `
   res.send(answer)

})

app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/public/') //send index.html
})

app.get("/node_modules/axios/dist/axios.js",(req,res)=>{
    res.sendFile(__dirname +'/public/node_modules/axios/dist/axios.js') //send index.html
})

app.listen(port);

console.log('listen on port ' + port);
