//step 1 initilize server

const http = require('http');

const hostname = '127.0.0.1';
const port = 5500;


//create the object
const server = http.createServer((req, res) => {
   // console.log(req.headers);
   
  res.statusCode = 200;
  //create plain text headers
  res.setHeader('Content-Type', 'text/plain');
  res.write(JSON.stringify( req.headers) )
  res.write('just another text' )
  res.end('finish message');


  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>'+JSON.stringify( req.headers)+'</h1>' )
  // res.write('just another text' )
  // res.end('finish message');

});

//start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});