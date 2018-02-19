addEventListener("message", function (evt) {
    var date = new Date();
    console.log(date);
    console.log(evt.date);
    var currentDate = null;
    do {
        currentDate = new Date();
    } while (currentDate - date < evt.data);
    postMessage(currentDate);
}, false);