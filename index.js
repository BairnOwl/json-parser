const express = require('express');
const axios = require('axios');
const app = express();

app.get('/parse', (req, res) => {

  let keys = req.query.route.split("/");

  // remove empty strings
  keys = keys.filter((entry) => { return entry.trim() != '' });

  axios.get(req.query.url)
    .then(response => {
        let data = response.data;

        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          data = data[key];
        }
        res.json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(8000, () => {
  console.log('Listening on port 8000!')
});
