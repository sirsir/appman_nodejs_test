//~ Helper to store all neccessary functions for better maintenance and testing
const helper = {

  pad: function(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  },

  getAllPossibleArrays: function(nums) {    
    let allArrays = [];
    let allArraysIndices = [];

    //~ Possible combination array (including all indices)
    let totalPossible = 2 ** nums.length;

    //~ Get array of running binary number
    //~ Eg. 000000...111111 (length=indices)
    let arrOfBinary = new Array(totalPossible).fill().map((x,i)=>i.toString(2))
    .map( binaryString => helper.pad(binaryString,nums.length) );

    //~ Get combination based on running binary    
    arrOfBinary.forEach(str=>{
      let tempArr = [];
      let indiceArr = []

      //~ if corresponding bit = 1, then the array will include that element and vice versa
      str.split('').forEach((bit,idx)=>{
        if ( bit === '1' ){
          tempArr.push(nums[idx]);
          indiceArr.push(idx);
        }
      })

      //~ Get only combination array of indices = 3
      if ( tempArr.length === 3 ){
        allArrays.push(tempArr);
        allArraysIndices.push(indiceArr)
      }

    })

    return {allArrays,allArraysIndices};
    
  },

  //~ NOT USED NOW, keep for future if the values are needed
  getArraySumEqualToTarget: function(objIn,target) {
    let arrIn = objIn.allArrays
    let filterFn = function (arrIn){
      return arrIn[0]+arrIn[1]+arrIn[2] === target;
    }

    let filteredArray = arrIn.filter(filterFn);
    return filteredArray;
  },

  getIndicesSumEqualToTarget: function(objIn,target) {
    let indices = []

    objIn.allArrays.forEach((arr,idx) =>{
      if (arr[0]+arr[1]+arr[2] === target){
        indices.push(objIn.allArraysIndices[idx])
      }
    })

    return indices;
  },

  getIndices: function(mainArray,subArray){
    return subArray.map(arr => arr.map( e => mainArray.indexOf(e) ) );

  }

};

const threeSum = (nums, target) => {
  // put your code here !!
  try{
    let allArraysObj = helper.getAllPossibleArrays(nums);

    //~ If values are needed.
    // let arrayOfElement = helper.getArraySumEqualToTarget(allArrays,target);

    let indices = helper.getIndicesSumEqualToTarget(allArraysObj,target);

    return indices;
  }catch(e){
    console.error(e);
    return [];
  }
};

module.exports = { threeSum };
