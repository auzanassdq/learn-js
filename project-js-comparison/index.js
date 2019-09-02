"use strict"

const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

// comparison if
const ageA = 18
const ageB = '18'

if (ageA > ageB){
  console.log('salah')
} else if (ageA < ageB) {
  console.log('benar')
} else {
  console.log('meragukan')
}

if (ageA === ageB){
  console.log('benar')
} else {
  console.log('salah')
}

// comparison switch
const personA = {
  name: 'Alpha',
  age: 20
}

const personB = {
  name: 'Beta',
  age: 20
}

switch (personA.age > personB.age){
  case true :
    console.log('benar')
    break
  
  case false :
    console.log('false')
    break

  default:
    console.log('meragukan')
}