const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static("public"));

/*
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/page2.html'));
})
*/

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});