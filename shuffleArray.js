//? --- THE FISHER-YATES SHUFFLE - EFFICIENT ARRAY SHUFFLING ---
https://bost.ocks.org/mike/shuffle/

//! --- VERBOSE ---
function shuffle(arr) {
  //// m represents the index we are shuffling to, starting with the last index in the array.
  let m = arr.length
  //// i is the randomly chosen index to swap values with index m.
  let i
  //// temp is for temporary storage of the value at i while we replace i's value with m's value. The value stored in temp is then assigned to index m, completing the swap.
  let temp

  //// m decreases by one each cycle. when it hits 0, it means we're done shuffling, as we have reached the start of the array.
  while(m) {
    //// i is randomly chosen between indexes 0 and m, and then m is immediately decreased by one.
    i = Math.floor(Math.random() * m--)
    //// The value at index i is stored in temp.
    temp = arr[i]
    //// The value at index i is REPLACED by the value at m(on first run, m is the index of the last element of the array.)
    arr[i] = arr[m]
    //// The value which was formerly at index i, which was stored in temp, is now assigned to index m.
    arr[m] = temp
  }

  return arr
}

console.log(shuffle([1,2,3,4,5]))

//! --- CONCISE ---
function shuffle(arr) {
  let m = arr.length
  let i, temp

  while(m) {
    i = Math.floor(Math.random() * m--)
    temp = arr[i]
    arr[i] = arr[m]
    arr[m] = temp
  }

  return arr
}

console.log(shuffle([1,2,3,4,5]))