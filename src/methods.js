const methods = {

  // Simulate a d10 roll n times. Returns an array of rolls.
  d10: (n) => {
    const rolls = new Array;
    for (let i = 0; i < n; i++) {
      let roll = Math.floor(Math.random() * 10) + 1;
      rolls.push(roll); 
    }
    return rolls;  
  },

}

export default methods;