const request = require("request");

// console.log(`${keyword}`)

const fetchBreedDescription = function(keyword, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${keyword}`, (error, response, body) => {
    callback(error, body);
  });
};

module.exports = { fetchBreedDescription };