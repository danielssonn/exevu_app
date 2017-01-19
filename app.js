var express = require('express')
var path = require('path');
var app = express()
var port = process.env.PORT || 3000


// route to angular
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('./public/app/index.html'));
});


app.listen(port, function () {
  console.log('Example app listening on port '+port)
})