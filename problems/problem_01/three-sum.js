//~ Helper to store all neccessary functions for better maintenance and testing
const helper = {

  pad: function(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  },

  getAllPossibleArrays: function(nums) {    
    let allArrays = [];

    //~ Possible combination array (including all indices)
    let totalPossible = 2 ** nums.length;

    //~ Get array of running binary number
    //~ Eg. 000000...111111 (length=indices)
    let arrOfBinary = new Array(totalPossible).fill().map((x,i)=>i.toString(2))
    .map( binaryString => helper.pad(binaryString,nums.length) );

    //~ Get combination based on running binary    
    arrOfBinary.forEach(str=>{
      let tempArr = [];

      //~ if corresponding bit = 1, then the array will include that element and vice versa
      str.split('').forEach((bit,idx)=>{
        if ( bit === '1' ){
          tempArr.push(nums[idx]);
        }
      })

      //~ Get only combination array of indices = 3
      if ( tempArr.length === 3 ){
        allArrays.push(tempArr);
      }

    })

    return allArrays;
    
  },

  getArraySumEqualToTarget: function(arrIn,target) {

    let filterFn = function (arrIn){
      return arrIn[0]+arrIn[1]+arrIn[2] === target;
    }

    let filteredArray = arrIn.filter(filterFn);

    return filteredArray;

  }

};

const threeSum = (nums, target) => {
  // put your code here !!
  try{
    let allArrays = helper.getAllPossibleArrays(nums);
    let result = helper.getArraySumEqualToTarget(allArrays,target);
    return result;
  }catch(e){
    console.error(e);
    return [];
  }
};

module.exports = { threeSum };
