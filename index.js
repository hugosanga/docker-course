const axios = require('axios');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const image = await axios('https://source.unsplash.com/random');
  res.send(`<img style="max-height: 95vh" src=${image.request.res.responseUrl} />`)
})

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
