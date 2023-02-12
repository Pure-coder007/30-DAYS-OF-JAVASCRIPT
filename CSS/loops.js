// // console.log('LOOPS.JS')


// // for (let i = 0; i <=5; i++){
// //     console.log(i)
// // }


// // // Reverse For loop

// // for (let i = 5; i >= 0; i--){
// //     console.log(i)
// // }



// // for (let i = 0; i <= 10; i++){
// //     console.log(`${i} * ${i} = ${i * i}`)
// // }


// // const countries = ['finland', 'spain', 'japan', 'brazil', 'chile']

// // const newCount = []

// // for (let i = 0; i < countries.length; i++){
// //     newCount.push(countries[i].toUpperCase())
// // }

// // console.log(newCount)




// // // Adding all the elements in the array

// // const numbers = [1, 2, 3, 4, 5]

// // let sum = 0

// // for (let i = 0; i < numbers.length; i++){
// //     sum += numbers[i]
// // }

// // console.log(sum)


// // // Creating a new array based on an existing array

// // const num = [1, 2, 3, 4, 5]

// // const newArr = []

// // for (let i = 0; i < num.length; i++){
// //     newArr.push(num[i] ** 2)
// // }

// // console.log(newArr)




// // const myCount = ['lagos', 'kano', 'kogi', 'south', 'kaduna']

// // const oldCount = []

// // for (let i = 0; i < myCount.length; i++){
// //     oldCount.push(myCount[i].toUpperCase())
// // }

// // console.log(oldCount)



// // const myFollowers = ['sam', 'jane', 'jude', 'simon', 'angel']

// // const yourFollowers = ['sam', 'jane', 'angel', 'diana', 'ola']

// // const mutualFollowers = []

// // for (let i = 0; i < myFollowers.length; i++){
// //     for (let j = 0; j < yourFollowers.length; j++){
// //         if (myFollowers[i] === yourFollowers[j]){
// //             mutualFollowers.push(myFollowers[i])
// //         }
// //     }
// // }

// // console.log(mutualFollowers)


// // const vacationSpots = ['ikeja', 'kano', 'island', 'london']

// // for (let i = 0; i < vacationSpots.length; i++){
// //     console.log(`i would love to visit ${vacationSpots[i]}`)
// // }




// // // WHILE LOOP

// // let i = 0
// // while(i <= 5){
// //     console.log(i)
// //     i++
// // }



// // let a = 5

// // while(a >= 0){
// //     console.log(a)
// //     a--
// // }





// // // DO WHILE LOOP

// // let b = 0

// // do {
// //     console.log(b)
// //     b++
// // } while (b <= 5)


// // let c  = 7

// // do {
// //     console.log(c)
// //     c--
// // } while (c >= 0)




// // // FOR OF LOOP
// // // We use for of loop for arrays. It is very hard way to iterate through an array if we are not interested in the index of each element in the array


// // const digits = [1, 2, 3, 4, 5]

// // for (const num of digits){
// //     console.log(num)
// // }




// // // Adding all the elements in an array

// // const myNum = [1, 2, 3, 4, 5]

// // let sums = 0

// // for (const num of myNum){
// //     sums = sums + num
// // }

// // console.log(sums)



// // const webTechs = [
// //     'HTML',
// //     'CSS',
// //     'JavaScript',
// //     'React',
// //     'Redux',
// //     'Node',
// //     'MongoDB'
// //   ]


// //   for (const tech of webTechs){
// //     console.log(tech.toUpperCase())
// //     console.log(tech[0])// getting only the first letter
// //   }



// //   const yourCount = ['mango', 'orange', 'banana', 'cherry']
// //  const fruits = []

// //  for (const count of yourCount){
// //     fruits.push(count.toUpperCase())
// //  }

// //  console.log(fruits)



// // //  BREAK: This is used to interrupt a loop

// // for (let i = 0; i <= 7; i++){
// //     if (i == 5){
// //         break
// //     }
// //     console.log(i)
// // }



// // // CONTINUE: We use the continue keyword to skip a certain iterations

// // for (let i = 0; i <= 10; i++){
// //     if (i == 6){
// //         continue
// //     }
// //     console.log(i)
// // }




// // // 




// // EXERCISES

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }


// let a = 0

// while(a <= 10){
//     console.log(a)
//     a++
// }


// let b = 0

// do{
//     console.log(b)
//     b++
// } while(b <= 10)



// for (let i = 0; i <= 10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }



// for (let i = 0; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }



// for (let i = 0; i <= 100; i++){
//     if (i % 2 != 0){
//         console.log(i)
//     }
// }



// const fruit =  ['banana', 'orange', 'mango', 'lemon']
// const newFruit = []
// for (let i = fruit; i > fruit.length; i--){
//     newFruit.push(fruit[i])
// }

// console.log(newFruit)