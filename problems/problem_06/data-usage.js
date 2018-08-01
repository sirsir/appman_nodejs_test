const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const helper = {
  getRecords: function(raw){
    return raw.split("\n").map(line => {
      let lineSplit = line.split(",");
      return {
        username: lineSplit[1].split('=')[1],
        date: lineSplit[0],
        dataUsage: parseInt(lineSplit[2].split('=')[1])
      }
    })
  },
  getSummary: function(records){
    let users2dates = {};
    let users2total = {};
    
    records.forEach(r => {
      // sumup data usage
      if (!users2total[r.username]){
        users2total[r.username] = 0;
      }
      users2total[r.username] += r.dataUsage

      if (!users2dates[r.username]){
        users2dates[r.username] = [];
      }
      if ( users2dates[r.username].indexOf(r.date) === -1){
        users2dates[r.username].push(r.date);
      }

    })

    // let totaldays = dates.length;
    // console.log(dates)

    let summaries = [];

    Object.keys(users2total).forEach( username => {
      summary = {
        username, 
        total: users2total[username],
        average: users2total[username]/users2dates[username].length
      }

      summaries.push(summary)
    })

    return summaries;
  }
};

const dataUsage = () => {
  // put your code here !!
  return new Promise((resolve,reject) => {
    try{
      let records = helper.getRecords(raw);
      let summary = helper.getSummary(records);

      resolve(summary);
    } catch(e) {
      reject(e);
    }    
    
  })
};

module.exports = { dataUsage };
