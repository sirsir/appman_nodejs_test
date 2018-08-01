// please write test here !!
const { dataUsage } = require('./index');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Problem 05 - data-usage', () => {
  const testcases = [
    {
      input: 'data-usage.test.js',
      expected: [ 
        { username: 'user03', total: 19387, average: 1938.7 },
        { username: 'user01', total: 15232, average: 1384.7272727272727 },
        { username: 'user02', total: 15897, average: 1445.1818181818182 } 
      ]
    }
  ];
  testcases.forEach(tc => {
    it(`${tc.input} => ${JSON.stringify(tc.expected)}`, async () => {
      const result = await dataUsage();
      expect(result).to.deep.equal(tc.expected);
      expect(result).to.be.an('array');      
      // expect(result).to.be.an('object');   
    });
  });
});