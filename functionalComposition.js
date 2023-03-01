//? --- FUNCTIONAL PROGRAMMING - PIPELINE CONSTRUCTOR ---

//// The 'compose' function takes in an arbitrary number of single-parameter pure functions, and returns a new function which is a composition of the passed in functions in the order that they were passed in. 
const compose = (...funcs) => {
  return input => {
    return funcs.reduce( (acc, curr) => {
      return curr(acc)
    }, input)
  }
}



//// Defining some pure fucntions to use.
//// Note that 'wrap' uses currying to allow it to take two arguments while still being compatible with the 'compose' function.
const wrap = el => str => `<${el}>${str}</${el}>`
const upper = str => str.toUpperCase()
const trim = str => str.trim()

//// Example of invoking the curried 'wrap' function.
console.log(wrap('div')('hello'))


//// Our input string.
const str = '   lowercase and whitespace       '

console.log(wrap('div')(upper(trim(str))))

//// Using compose to build a pipeline function. Note that since 'wrap' is curried, we are able to specify an element to wrap the str in as it is passed down the pipeline from function to function.
const pipeline = compose(trim, upper, wrap(upper('div')))

//// Our input string.
// const str = '   lowercase and whitespace       '
console.log(pipeline(str)) // <div>LOWERCASE AND WHITESPACE</div>
console.log(pipeline('hello my baby hello my darlinghwello my ragtime gal     ')) // <div>LOWERCASE AND WHITESPACE</div>