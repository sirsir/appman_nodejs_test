// please write test here !!
// const { expect } = require('chai');
const { bangkokForecast } = require('./index');

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Problem 05 - api', () => {
  const testcases = [
    {
      input: '()',
      expected: [ 
        { date: '2018-01-29', minTemp: 25.21, maxTemp: 27 },
        { date: '2018-01-30', minTemp: 23.28, maxTemp: 31.26 },
        { date: '2018-01-31', minTemp: 20.88, maxTemp: 30.81 },
        { date: '2018-02-01', minTemp: 19.33, maxTemp: 28.77 },
        { date: '2018-02-02', minTemp: 17.3, maxTemp: 31.47 },
        { date: '2018-02-03', minTemp: 18.13, maxTemp: 26.23 },
        { date: '2018-02-04', minTemp: 14.49, maxTemp: 25.41 } 
      ]
    }
  ];
  testcases.forEach(tc => {
    it(`${tc.input} => same format as ${JSON.stringify(tc.expected,null,'  ')}`, async () => {
      const result = await bangkokForecast();
      expect(result).to.be.an('array');
      expect(result).to.have.length(7);

      result.forEach(r=>{
        Object.keys(tc.expected[0]).forEach(k=>{
          expect(r).to.have.own.property(k);
        })        
      })

    });
  });
});


