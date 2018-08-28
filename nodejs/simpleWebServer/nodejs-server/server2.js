
//how to hotreload 'npm i supervisor -g'

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mimeTypes = {
    "js": "text/javascript",
    "html": "text/html",
    "css": "text/css",
    "jpg": "image/jpg",
    "jpeg": "image/jpeg",
    "png": "image/png",
};

http.createServer(function (req, res) {

    //URI -- Uniform Resource Identifier

    //  URL -- Uniform Resource Locator
    // Contains information about how to fetch a resource from its location. For example:  
    //http://example.com/mypage.html

    var uri = url.parse(req.url).pathname;
    console.log('uri', uri)

    var fileName = path.join(process.cwd(),unescape(uri));
    console.log('fileName',fileName)

    var stats;
    try{
		stats = fs.lstatSync(fileName);
	} catch(e){
		console.log('serve 404 ');
		res.writeHead(404, {'Content-type': 'text/plain'});
		res.write('404 Not Found\n');
		res.end();
		return;
	}

	if(stats.isFile()){
		console.log('serve file ' + fileName);
		
		var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
		res.writeHead(200, {'Content-type': mimeType});

		var fileStream = fs.createReadStream(fileName);
		fileStream.pipe(res);
	} else if(stats.isDirectory()) {
		console.log('serve index.html ');
		res.writeHead(302, {
			'Location': 'index.html'
		});
		res.end();
	} else {
		console.log('serve 500');
		res.writeHead(500, {'Content-type':'text/plain'});
		res.write('500 Internal Error\n');
		res.end();
	}

}).listen(1337);
