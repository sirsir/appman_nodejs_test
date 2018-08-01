const minStep = input => {
  // put your code here !!
  try {
    let step = 0;
    let transformedNumber = input;
    const TARGET = 1;

    while (transformedNumber != TARGET){
      
      if ( transformedNumber%2 === 0 ){
        transformedNumber = transformedNumber/2;
      } else {
        /* Select from 2 possible cases */
        let transformedNumberCase1 = transformedNumber-1;
        let transformedNumberCase2 = transformedNumber+1;
        
        if ( minStep(transformedNumberCase1) < minStep(transformedNumberCase2) ){
          transformedNumber = transformedNumberCase1;
        } else {
          transformedNumber = transformedNumberCase2;
        }
      }

      step++;
    }
    
    return step;
  } catch(e) {
    console.log(e);
  }    
};
module.exports = { minStep };
