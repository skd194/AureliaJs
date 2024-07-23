const express = require('express');
console.log('initiating...');
const app = express();
app.use(express.static('./'));
const server = app.listen(4009, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
