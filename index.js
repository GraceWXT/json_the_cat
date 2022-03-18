const { fetchBreedDescription } = require("./breedFetcher");
const keyword = process.argv.slice(2).toString();

fetchBreedDescription(keyword, (error, body) => {
  if (error) {
    console.log(`Sorry, there was an ${error}.`);
    return;
  }
  // console.log(typeof JSON.parse(body)); // should print "object", is an array of matching results
  let firstMatch = JSON.parse(body)[0];
  if (firstMatch) {
    console.log(firstMatch.description);
  } else {
    console.log(`Sorry, the requested breed is not found.`);
  }
});