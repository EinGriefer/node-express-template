var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/example', function (req, res) {
    res.send('Working');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Running! Visit localhost:8081 in your browser.")
})