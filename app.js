var express = require('express');
var app = express();
app.use( express.static( "public" ) );

app.get('/', function (req, res) {
  res.send('<h1>Hello Bear!</h1><img src="/oh-you-know-just-a-bear-waving-hello.jpg" width="800" height="500" />');
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});
