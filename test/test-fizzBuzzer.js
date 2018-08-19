// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return the correct response from taking modulus', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a:45, expected: 'fizz-buzz'},
      {a:10, expected: 'buzz'},
      {a:33, expected: 'fizz'},
      {a:11, expected: 11}
    ];
    // for each set of inputs (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where input is not a number
    const badInputs = [
      [NaN],
      ['33'],
      [undefined],
      ['word']
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});