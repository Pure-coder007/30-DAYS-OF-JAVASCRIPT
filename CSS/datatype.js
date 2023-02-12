// console.log('DATA TYPE.JS')

// /*
// NUMBERS
// STRINGS
// BOOLEANS
// NULL
// UNDEFINED
// SYMBOL
// OBJECTS
// ARRAYS
// */

// let num = 3
// let num2 = 10

// console.log(num == num2)

// let js = 'javascript'
// let py = 'python'

// console.log(js.length == py.length)


// // Non primitive data type are modifiable

// let nums = [1, 2, 3]
// nums[0] = 20

// console.log(nums)

// // Non primitive data type cannot be compared by value even if they have the same properties and values, they are not strictly equal


// let number = [1, 2, 3]

// let number2 = [1, 2, 3]

// console.log(number == number2)

// // BUT

// let myNum = [1, 2, 3, 4, 5]

// let yourNum = myNum

// console.log(myNum == yourNum)




// // MATH OBJECT: In javascript the math object provides a lot of methods to work with numbers

// const pi = Math.PI
// console.log(pi)

// console.log(Math.round(pi))

// console.log(Math.round(9.81))// round values to their nearest number

// console.log(Math.floor(pi))

// console.log(Math.ceil(pi)) // rounding up

// console.log(Math.min(1, 2, 3, 4, -5, 0))// returns the smallest value

// console.log(Math.max(1, 2, 3, 50))// retruns the biggest value

// const rand = Math.random()// creates random number between 0 and 1

// console.log(rand)


// const randNum = Math.random() * 11// returns random values from 0 to 10

// console.log(randNum)

// const myRand = Math.floor(Math.random() * 11)// creates whole random values from 0 to 10

// console.log(myRand)


// console.log(Math.pow(3, 2))// 3 raise to power 2 gives 9



// // STRING METHODS: There are many string methods that help us to work with strings

// // .length

// let java = 'javascript'
// console.log(java.length)

// let firstName = 'kingsley'
// console.log(firstName.length)


// //  ACCESSING CHARACTERS IN A STRING: 

// let course = 'javascript'

// let firstLetter = course[0]

// console.log(firstLetter)

// let lastLetter = course.length - 1

// console.log(course[lastLetter])


// // .split()

// let job = 'i am a programmer' 

// console.log(job.split(' '))


// // includes(): it returns a boolean

// let old = '30 days of javascript'

// console.log(old.includes(30))
// console.log(old.includes('days'))
// console.log(old.includes('java'))
// console.log(old.includes('Script'))



// // replace(): It takes a parameter the old substring and a new substring

// console.log(old.replace('javascript', 'python'))


// // indexOf(): It takes a substring and if the substring exists in a string it returns the first position of the string else it returns -1

// let heart = 'i love who loves who i love'

// console.log(heart.indexOf('love'))// first value of love

// console.log(heart.indexOf('man'))// not found


// // lastIndexOf(): It takes a substring and if the substring exists in a string it returns its last position else it returns -1

// console.log(heart.lastIndexOf('love'))// the last "love" in the string


// // concat(): it takes many substrings and join them

// let frontEnd = ['html', 'css', 'javascript']
// let backEnd = ['node', 'python']

// console.log(frontEnd.concat(backEnd))


// // repeat(): it takes a number as argument and it returns the repeated version of the string

// let man = 'boy'

// console.log(man.repeat(5))


// // CHANGING DATA TYPE(CASTING): Converting one data type to another we use parseInt(), parseFloat(), Number(), +sign(), str()

// let one = '10'

// let numInt = parseInt(one)
// console.log(numInt)


// let two = '20'
// let two2 = parseFloat(two)

// console.log(two)


// let four = '50'
// let four$ = Number(four)

// console.log(four$)


// let five = '1'
// let five$ = +five

// console.log(five$)


// let challenge = '30 Days Of JavaScript'

// console.log(challenge)

// console.log(challenge.length)

// console.log(challenge.toUpperCase())

// console.log(challenge.toLowerCase())

// let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// console.log(company.split(', '))


// let me =  'javscript'

// console.log()