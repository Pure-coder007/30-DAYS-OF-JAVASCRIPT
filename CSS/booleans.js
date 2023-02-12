// console.log('BOOLEANS.JS')

// // Truthy Values

// // All numbers(positive and negative) are truthy except zero

// // All strings are truthy except an empty string ("")

// // The boolean true


// // FALSY VALUES

// // 0
// // 0n
// // null
// // undefined
// // NaN
// // The boolean false
// // "" empty string


// // Increment operator: in javascript we use the increment operator to increase a value in a variable

// // Pre-increment

// let count = 0
// console.log(++count)

// console.log(count)
// // Same also goes with the decrement operator



// // Post-increment

// let count2 = 20
// console.log(count2++)

// console.log(count2)
// // Same also goes with the decrement operator




// // Ternary Operators: it allows to write a condition another way round


// let isRain = true

// isRain
// ? console.log('you need coat')
// : console.log('no need for coat')


// let num = 5

// num > 0
// ? console.log(`${num} is a positive number`)
// : console.log(`${num} is a negative number`)


// // Window prompt() method: It displays a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional

// // let number = prompt('Enter number', 'number goes here')
// // console.log(number)


// // // Window confirm() method: The confirm() method displays a dialog box with a specified message along with an ok and cancel button

// // const agree = confirm('Are you sure about this?')
// // console.log(agree)
// // it prints out a boolean





// // DATE OBJECT: We use this to get date and time information 

// /*
// getFullYear()  Getting year
// getMonth()     Getting month
// getDate()      Getting the day as a number
// getHours()     Getting the current hour
// getMinutes()   Getting current minutes
// getSeconds()   Getting current seconds
// getMilliseconds() Getting the millisecond
// getTime()       Getting time since jan 1, 1970
// getDay()        Getting the current weekday

// */

// // Creating Time object
// let now = new Date()
// console.log(now)
// // Getting Full Year

// console.log(now.getFullYear())

// // Getting month

// console.log(now.getMonth())//january starts from 0

// // Getting date

// console.log(now.getDate()) // current day

// // Getting Day
// console.log(now.getDay())// gets the day of the week


// // Getting hours

// console.log(now.getHours())// current hours

// // Getting minutes
// console.log(now.getMinutes())// current minute



// // Getting seconds
// console.log(now.getSeconds())// current seconds


// // Getting Time: This method gives time in miliseconds from jan 1, 1970. it is also known as unix time

// // Using getTime()

// console.log(now.getTime())


// // Using Date.now()

// const allSeconds = Date.now()
// console.log(allSeconds)


// const now2 = new Date()

// const year = now2.getFullYear()
// const month = now2.getMonth() +1
// const date = now2.getDate()
// const hours = now2.getHours()
// const minute = now2.getMinutes()

// console.log(`${date}/${month}/${year}  ${hours}:${minute}`)



// // EXERCISES

// let firstName ='kingsley'
// let lastName = 'dike'
// let country = 'india'
// let age  = 29
// let isMarried = false


// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof age)
// console.log(typeof country)
// console.log(typeof isMarried)


// console.log('10' == 10)

// console.log(parseInt('9.8') == 10)


// let man = 'boy'
// let woman = 'girl'

// console.log(man.length == woman.length)

// console.log(man.length != woman.length)


// // let base = prompt('Enter base of triangle')
// // let height = prompt('Enter height of triangle')

// // console.log('The area of triangle is ' + base * height)


// // let name = prompt('Enter name')

// // if (name.length > 7){
// //     console.log('your name is long')
// // } else {
// //     console.log('your name is short')
// // }


// console.log(`${year}-${month}-${date}  ${hours}:${minute}`)