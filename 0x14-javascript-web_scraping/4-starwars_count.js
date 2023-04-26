#!/usr/bin/node
const request = require('request');
const options = {
  url: `${process.argv[2]}/`,
  json: true
};
request(options, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  let count = 0;
  for (let i = 0; i < body.results.length; i++) {
    const show = body.results[i];
    for (let j = 0; j < show.characters.length; j++) {
      if (show.characters[j] === 'https://swapi-api.alx-tools.com/api/people/18/') {
        count++;
      }
    }
  }
  console.log(count);
});
