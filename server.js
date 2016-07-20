var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(3000, function (err) {
    if(err) return console.log('An error arose: ', err), process.exit(1);
    console.log('Listening app on port 3000');
});
