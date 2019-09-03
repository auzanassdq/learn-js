// do while
let i = 1
do {
  console.log(i)
  i+=5
} while (i < 100)

// ----------Challenge----------
// Challenge 1
console.log("----------Challenge----------")
factorial = 1
input = 8
while (input >= 1){
    factorial = factorial * input
    input-- 
}
console.log(factorial)

// Challenge 2
input = "Auzan Assidqi"
reverseInput = ""
for (i = input.length-1; i>=0; i--){
  reverseInput = reverseInput + input[i]
}
console.log(reverseInput)