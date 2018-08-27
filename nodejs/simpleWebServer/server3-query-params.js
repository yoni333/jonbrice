//step 1 initilize server

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 5500;


//create the object
const server = http.createServer((req, res) => {
   // console.log(req.headers);
   
  res.statusCode = 200;
  //create plain text headers
  res.setHeader('Content-Type', 'text/html');

 res.write(addDIv('URL:'))
  res.write( addDIv(JSON.stringify( req.url) ))

  //get query params
  let   url_parts = url.parse(req.url, true);
  let query = url_parts.query;
  res.write(addDIv('PARAMS:'))

  res.write( addDIv(JSON.stringify( query )))
  

  res.end('finish message');



});

//start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});


const addDIv=(st)=>'<div>' + st+'</div>' ;