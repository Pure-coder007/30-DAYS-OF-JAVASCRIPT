// console.log('ARRAYS.JS')

// // Creating an empty array
// // Using Array constructor
// const arr = Array ()

// // or let arr = new Array ()

// console.log(arr)

// // Using square brackets

// const arr2 = []
// console.log(arr2)


// // Arrays with different data types

// const myArr = [
//     'kingsley', 
//     29,
//     true,
//     {country: 'Nigeria', city: 'lagos'},
//     {skills:  ['html', 'css', 'js']}
// ]


// // Creating an array using split

// let js = 'javascript'

// let old = js.split('')
// console.log(old)



// // Methods to manipulate array

// // Array constructor
// // Array to create an array

// const arr1 = Array()

// console.log(arr1)

// const emptyValues = Array(8)

// console.log(emptyValues)



// // Creating static values with fill

// const values = Array(5).fill('man')

// console.log(values)



// // Concatenating array using concat

// const first = [1, 2, 3, 4]

// const second = [5, 6, 7, 8]

// const third  = first.concat(second)

// console.log(third)

// const frontEnd = ['html', 'css', 'javascript']

// const backEnd = ['node', 'python', 'django']

// const fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)


// // Getting index of an element in an array
// // indexOf: to check if an item exists in an array

// console.log(fullStack)

// console.log(fullStack.indexOf('html'))
// console.log(fullStack.indexOf('django'))
// console.log(fullStack.indexOf('css'))
// console.log(fullStack.indexOf('javascript'))
// console.log(fullStack.indexOf('home'))// not found



// // Checking if an element exist in an array

// let index = fullStack.indexOf('css')

// if (index == -1){
//     console.log('this element does not exist')
// } else {
//     console.log('it exists')
// }


// // Getting last index of an element in an array
// // lastIndexOf: it gives the position of the last index of the last item in the array. if it exist, it returns the index else it returns -1

// const numbers = [1, 2, 3, 4,  5, 3, 2, 5 ]

// console.log(numbers.lastIndexOf(5))
// console.log(numbers.lastIndexOf(3))
// console.log(numbers.lastIndexOf(4))
// console.log(numbers.lastIndexOf(2))



// // Checking array
// // Array.isArray: To check if the data type is an array

// const num = [1, 2, 3, 4, 5]
// console.log(Array.isArray(num))


// const num2 = 100
// console.log(Array.isArray(num2))


// // Converting array to string
// // toString(): Converts array to string

// const myNum = [1, 2, 3, 4, 5]

// console.log(myNum.toString())



// // Joining Array Elements
// // join: its used to join the element of the array. The argument we passed in the join method will be joined in the array and return as a string

// const names = ['dan', 'mike', 'sam', 'joe']

// console.log(names.join(' &  '))


// // Reversing an array
// // reverse(): reverses the order of the array

// console.log(names)

// console.log(names.reverse())



// // Sorting elements in an array
// // sort(): it arranges array elements in ascending order

// const a = [1, 5, 8, 2, 3, 7, 6, ]

// console.log(a.sort())


// // Array of arrays
// // Nested arrays: it can store different data types including an array itself

// const firstNum = [1, 2, 3, 4]

// const secondNum = [5, 6, 7, 8]

// const fullNums = [firstNum, secondNum]

// console.log(fullNums)


// const fullEnd = [frontEnd, backEnd]

// console.log(fullEnd)


// // EXercises

const arr = []

const array = [1, 2, 3, 4, 5, 6, 7]
console.log(array.length)

let first = array[0]

let middle = array[3]

let last = array.length -1

console.log(first)
console.log(middle)
console.log(array[last])



const mixedDataTypes = [1, 'man', true, null, undefined, {country: 'mali'}]

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies)

console.log(itCompanies.length)

let firstIt = itCompanies[0]
let middleIt = itCompanies[3]
let lastIt = itCompanies.length -1

console.log(firstIt)
console.log(middleIt)
console.log(itCompanies[lastIt])


console.log(`${itCompanies} are big IT companies`)



let newIT = itCompanies.indexOf('Facebook')

if (newIT == -1){
    console.log('it doesnt exit')
} else {
    console.log('it exists')
}


console.log(itCompanies.sort())

console.log(itCompanies.reverse())