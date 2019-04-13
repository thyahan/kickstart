const express = require('express');

const app = express();
const fs = require('fs');
const path = require('path');
const replace = require('stream-replace');
const port = 8080;

app.use(
  express.static('build', {
    index: false
  })
);

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.statusCode = 200;
  const configValue = {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3001'
  };

  fs.createReadStream(path.join(__dirname, './build', 'index.html'))
    .pipe(replace(/"_SERVER_INITIAL_DATA_"/g, JSON.stringify(req.headers)))
    .pipe(replace(/"_SERVER_CONFIG_"/g, JSON.stringify(configValue)))
    .pipe(res);
});

app.listen(port, () => {
  console.log(`Server start at ${port}`);
});
