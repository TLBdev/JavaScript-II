// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
let countX = 0
let inc = () => {
  return countX++
}
console.log('challenge 1')
console.log(inc())
console.log(inc())
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker2 = () => {
  let count = 0
  function counter(){
    count+=1
    return count
  }
  
  return counter
}
let myCounter2 = counterMaker2()
console.log('challenge 1')
console.log(myCounter2()) // 1

console.log(myCounter2()) // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker = () => {
  let count = 0
  function counter(){
    if(count < 2){
    count += 1
    return count
    }else{
      count = 1
      return count
    }
  }
  
  return counter
}
let myCounter = counterMaker()
console.log('challenge 3')
console.log(myCounter()) // 1
console.log(myCounter()) // 2
console.log(myCounter()) // 1
// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0
  const counterObj = {
    inc: () => {counter++; return counter},
    dec: () => {counter--; return counter}
  }
  return counterObj
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

};
let myCountObj = counterFactory()
console.log('challenge 4')
console.log(myCountObj.inc())
console.log(myCountObj.inc())
console.log(myCountObj.inc())
console.log(myCountObj.dec())
console.log(myCountObj.dec())
console.log(myCountObj.inc())
