//// Custom deepCopy function.
//// Cannot yet handle functions within the object yet.

const deepCopy = obj => {
  let copy = {}
  for(let key in obj) {
    //// If the value for a key is an object...
    if(typeof obj[key] === 'object') {
      //// And if it is ALSO an array, then recursively deep copy the array.
      //// If we only used .slice(), any objects within the array would be shallow copies- copied by reference only. So we iterate through each value of the array and push a deepCopy of each value into a new array instead.
      if(Array.isArray(obj[key])) {
        const arrayCopy = []
        //// Inste
        for(let value of obj[key]) {
          arrayCopy.push(deepCopy(value))
        }
        copy[key] = arrayCopy
      }
      //// If it's NOT an array- in other words, a normal object, then simply deepCopy it.
      else copy[key] = deepCopy(obj[key])
    }
    //// If the value is not an object, simply copy the value.
    else copy[key] = obj[key]
  }
  return copy
}