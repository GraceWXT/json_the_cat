const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, body) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned body
      assert.equal(expectedDesc, JSON.parse(body)[0].description.trim());

      done();
    });
  });

  it('returns an appropriate message when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('Test', (error, body) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      // compare returned body
      const expectedBody = "[]";
      assert.deepEqual(expectedBody, body);

      // const expectedDesc = null;
      // assert.equal(expectedDesc, JSON.parse(body)[0].description.trim());
      done();
    });
  });
});

