'use strict';
let express = require('express');
let router = express.Router();
let request = require('request');
let fs = require('fs');

router.post('/projectData', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('../../data/challenge.json', 'utf8'));
});

router.get('/projectData', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('../../data/challenge.json', 'utf8'));
  res.send(JSONData);
});

router.delete('/projectData/:symb', (req, res) => {
  //Delete user clicked symbol.
  // let JSONData = JSON.parse(fs.readFileSync('../../data/challenge.json', 'utf8'));

  // fs.writeFile('../../data/challenge.json', JSON.stringify(JSONData, null, 2), 'utf-8', (err) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //      res.sendStatus(200);
  //   }
  // });
})

module.exports = router;



