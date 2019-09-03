"use strict"

let person = {
  name : 'Auzan Assidqi',
  age : 21,
  hobbies : ['magic', 'workout', 'watch movie']
}

console.log(person)
console.log(JSON.stringify(person) )

let jsonPerson = `{
  "name" : 'Auzan Assidqi',
  "age" : 21,
  "hobbies" : ['magic', 'workout', 'watch movie']
}`

console.log(jsonPerson)
console.log(JSON.parse(jsonPerson))

// web storage
localStorage.setItem("user", "auzan")
localStorage.setItem("id", "442323")