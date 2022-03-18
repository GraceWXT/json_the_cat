const request = require("request");

// console.log(`${keyword}`)

const fetchBreedDescription = function(keyword, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${keyword}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } else {
      const data = JSON.parse(body)[0];
      if (data.description) {
        return callback(null, data.description);
      } else {
        return callback('breed not found', null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };