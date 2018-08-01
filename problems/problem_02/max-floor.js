const helper = {
  getBrickRequired(currentFloor){
    return currentFloor+1;
  }
}

const maxFloor = input => {
  // put your code here !!
  let floorCounter = 0;
  let remainingBrick = input;

  let requiredBrick = helper.getBrickRequired(floorCounter)

  while ( remainingBrick > requiredBrick ){
    remainingBrick -= requiredBrick;
    floorCounter++;

    requiredBrick = helper.getBrickRequired(floorCounter)
  }

  return floorCounter;
};

module.exports = { maxFloor };
