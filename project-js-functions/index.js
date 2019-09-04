// basic function
function addition(num1, num2){
  result = num1 + num2
  return result
}
console.log(addition(2,9))

// function in variable
let multiply = function(num1, num2){
  result = num1 * num2
  return result
}
console.log(multiply(4,2))

// arrow function
const devide = (num1, num2) => {
  result = num1 / num2
  return result
}
console.log(devide(8, 2))

var luas = (p, l) => p*l
luas(4*2)

// function in obj
person = {
  name : "auzan",
  sayHello : (word1, word2) => {
    console.log(`${word1} ${word2}`)
  }
}
person.sayHello("haaai", " Auzan")


let user = {
  // regular function
  name : 'auzan',
  age : 21,
  show1 : function (){
    return this.name
  },

  // short hand function
  show2(){ 
    return this.age
  },
};

console.log(user.show1()) 
console.log(user.show2())