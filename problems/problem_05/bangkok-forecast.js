const axios = require('axios');

const helper = {
  config: {    
    url: 'https://api.openweathermap.org/data/2.5/forecast',
    option: {
      params: {
        q: 'Bangkok,th',
        mode: 'json',
        units: 'metric',
        cnt: 7,
        appid: 'e5446373eef6128679c7fa8a1951d788'
      }
    }
  },

  getRawData: function() {
    return new Promise((resolve,reject) => {
      let url = this.config.url
      let option = this.config.option
      axios.get(url,option)
      .then(resolve)
      .catch(e=>reject(e.response))      
    })
  },

  formatdata: function(response) {
    return new Promise((resolve,reject) => {
      try{
        let {list} = response.data;

        if (list === undefined){
          reject('no result list');
        }
        //~ Debug to check error due to API update
        // console.log(JSON.stringify(list,null,"  "))
        let formatedData =  list.map((day) => {
          return {
            date: day.dt_txt.split(' ')[0],
            minTemp: day.main.temp_min,
            maxTemp: day.main.temp_max
          }
        });

        resolve(formatedData)
      } catch(e) {
        reject(e)
      }      
    })
  }
}

const bangkokForecast = async () => {
  // put your code here !!
  return new Promise((resolve,reject) => {
    helper.getRawData()
    .then(helper.formatdata)
    .then(resolve)
    .catch(reject)
  });
  
};

module.exports = { bangkokForecast };
