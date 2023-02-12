// console.log('FUNCTIONS.JS')

// /*
// Function Declaration
// Function Expression
// Anonymous Function
// Arrow Function
// */


// // Function Declaration

// function square(){
//     let num = 2
//     let sq = num * num
//     console.log(sq)
// }

// square()

// function addTwoNumbers() {
//     let numOne = 10
//     let numTwo = 20
//     let sum = numOne + numTwo
//     console.log(sum)
// }

// addTwoNumbers()



// function printFullName() {
//     let firstName = 'kingsley'
//     let lastName = 'Dike'
//     let space = ' '

//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }

// printFullName()



// // Function Returning Value: Function can also return value. If a function does not return value, the value of the function is undefined

// function myFullName() {
//     let firstName = 'Dan'
//     let lastName = 'Sam'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }

// console.log(myFullName())


// function addNum() {
//     let numOne = 5
//     let numTwo = 10
//     let total = numOne + numTwo
//     return total
// }

// console.log(addNum())



// // Function With Parameter


// function areaOfCircle(r) {
// let area = Math.PI * r * r
// return area
// }

// console.log(areaOfCircle(10))


// function square(num){
//  return num * num
// }

// console.log(square(10))



// // Function With Two Parameters

// function sumTwoNumbers(one, two) {
// let sum = one + two
// return sum
// }

// console.log(sumTwoNumbers(10, 20))


// const numbers = [1, 2, 3, 4, 5]

// function sumArrayValues(arr) {
//  let sum = 0
//  for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
//  }
//  return sum
// }



// console.log(sumArrayValues(numbers))


// // Function With Unlimited Number OF Parameter: Sometimes we do not know how many arguments the user is going to pass.


// // Unlimited number of parameters in regular function


// function sumAllNums() {
//     let sum =  0
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(sumAllNums(1, 2, 40))
// console.log(sumAllNums(1, 2, 40, 500))



// // Unlimited Number of parameters in arrow function


// const sumNums = (...args) => {
//     let sum = 0
//     for (const element of args){
//         sum += element
//     }
//     return sum
// }

// console.log(sumNums(200,500,524))
// console.log(sumNums(200,500,524, 5236, 664))
// console.log(sumNums(200,500,5))



// // Function Expression: They are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable


// const squares = function(n){
//     return n * n
// }

// console.log(squares(10))



// // Arrow function: Its an alternative to write function, it uses an arrow instead of the keyword function


// const mySquare = n =>{
//     return n * n
// }
// console.log(mySquare(200))


// const changeToUpperCase = arr =>{
//     const newArr = []
//     for (const element of arr) {
//         newArr.push(element.toUpperCase())
//     }
//     return newArr
// }

// const nations =  ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

// console.log(changeToUpperCase(nations))



// // Functions with default parameters: Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.



// function greeting(name = 'customer'){
//     let message = `Thank you for your purchase ${name}!`
//     return message
// }

// console.log(greeting())
// console.log(greeting('mike'))
// console.log(greeting('sam'))



// function calcAge(birthYear, currentYear = 2023){
//  let age = currentYear - birthYear
//  return age
// }

// console.log('Age: ', calcAge(1993))



// // Exercises

function fullName(firstName, lastName){

    return firstName +  ' ' + lastName
}

console.log(fullName('Dike', 'Kingsley'))


function addNumbers(one,two){
    return one + two
}
console.log(addNumbers(10, 20))



function area(length, width){
    return length * width
}

console.log(area(10, 5))




function periOfRectangle(length, width){
 let perimeter = 2 * (length + width)
 return perimeter
}

console.log(periOfRectangle(5,8))



function volume(length, width, height){
 let prism = length * width * height
 return prism
}

console.log(volume(2,4,6))



const areaOfCircle = (r) =>{
    let pi = Math.PI
    let area = pi * r * r
    return area
}

console.log(areaOfCircle(10))



const circumfrence = r =>{
    let pi = Math.PI
    let circ = 2 * pi * r
    return circ
}

console.log(circumfrence(20))




function density(mass, volume){
 let dense = mass/volume
 return dense
}

console.log(density(50, 10))


function totalSpeed(distance, time){
 let speed  = distance/time
 return speed
}

console.log(totalSpeed(50, 5))




function calcWeight(mass, gravity){
 let weight = mass * gravity
 return weight
}

console.log(calcWeight(20, 6))



function convertCelcius(celcius){
 let fahrenheit = (celcius * 9/5) + 32
 return fahrenheit
}

console.log(convertCelcius(50))



function checkSeason(month){
 if (month == 'january' || month == 'february' || month == 'march'){
    return 'Its Autumn Season'
 } else if (month == 'april' || month == 'may' || month == 'june'){
    return 'Its winter season'
 } else if (month == 'july' || month == 'august' || month == 'september'){
    return 'Its spring season'
 } else if (month == 'october' || month == 'november' || month == 'december'){
    return 'Its summer season'
 }
}

console.log(checkSeason('september'))
console.log(checkSeason('january'))
console.log(checkSeason('march'))
console.log(checkSeason('december'))
console.log(checkSeason('april'))



function findMax(one, two, three){
    if (one > two && one > three){
        return `${one} is greater than ${two} and ${three}`
    } else if (two > one && two > three){
        return `${two} is greater than ${one} and ${three}`
    } else if (three > one && three > two){
        return `${three} is greater than ${one} and ${two}`
    }
}

console.log(findMax(5, 10, 15))





function printArray(arr){

 const newFruit = []
 for (const element of arr){
    newFruit.push(element.toUpperCase())
 }
 return newFruit
}
const fruit = ['mango', 'orange', 'coconut', 'watermelon']
console.log(printArray(fruit))



function showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minute = now.getMinutes()

    return `${date}/${month}/${year} ${hours}:${minute}`
}

console.log(showDateTime())


const i = [1, 2, 3, 4, 5, 6]

function reverseArray(){
    for (let i = 6; i >= 1; i--){
        console.log (i)
    }
}

reverseArray()


function capitalizeArray(arr) {
 

 const person = []

 for (let i = 0; i < arr.length; i++){
    person.push(people[i].toUpperCase())
 }
 return person
}

const people = ['man', 'woman', 'boy', 'girl']

console.log(capitalizeArray(people))



function addItem(item) {
    const food = ['rice', 'beans', 'yam']
     food.push('plantain')
     return food
}

console.log(addItem())



function removeItem(index){
    const hobbies = ['football', 'basketball', 'volleyball', 'golf']
    hobbies.pop()
    return hobbies
}

console.log(removeItem())



function sumOfNumbers(...args){

 let  sum = 0
 for (const element of args)
 sum += element

 return sum

}

console.log(sumOfNumbers(10, 5, 7, 100))