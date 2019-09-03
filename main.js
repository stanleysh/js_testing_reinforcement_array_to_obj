function arrayToObj(arrayOfStuff) {
   let obj = {};
   arrayOfStuff.forEach((element) => {
      obj[element[0]] = element[1];
   })
   return obj
}

module.exports = arrayToObj;
