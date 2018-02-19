
//this not work from local files -only from server
//https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker

var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i );
    setTimeout("timedCount()",500); // recursive - the function call herself!!
}

timedCount();