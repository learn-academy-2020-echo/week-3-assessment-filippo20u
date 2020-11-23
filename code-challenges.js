// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


 const fibo = () => {
    let arr=[]
    arr[0]=0
    arr[1]=1
    for(i=2; i<=10; i++)
    { arr[i]=arr[i-1]+arr[i-2] }
    return arr
}

console.log("Fibonacci:", fibo())

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// ### working code
// const  onlyOdd = (array) => {
//     let newArr = array.filter(value => {
//         return ( typeof value === "number" && value %2 !== 0)
//     })
//    return newArr.sort((a, b) => {return a-b})
// }   


const  onlyOdd = (array) => {
    let newArr = array.filter(value => {return (typeof value === "number" && value %2 !== 0 )}).sort((a, b) => {return a-b})
       return newArr 
}

console.log("Challenge 2.1:",onlyOdd(fullArr1))
console.log("Challenge 2.2:",onlyOdd(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


const middle = (array) => {
 let splitted = array.split("")
//  even number of letters
 if (splitted.length %2==0)
 return `${splitted[Math.floor((splitted.length / 2)-1)]}${splitted[Math.floor(splitted.length / 2)]}`
// odd numbers of letters
else if (splitted.length %2 !==0)
return splitted[Math.floor(splitted.length / 2)]
}

console.log("Challenge 3.1:",middle(middleLetters1))
console.log("Challenge 3.2:",middle(middleLetters2))

// bonus variable to double check
// var middleLetters3 = "abstract"
// // Expected output: “tr”
// console.log("Challenge 3.3:",middle(middleLetters3))


// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)



class Sphere {
    constructor(radius) {
      this.pi = 3.14159265359
      this.radius = radius
    }


      calcArea =  () => { 
        return 4*3.14159265359*Math.pow(this.radius, 2)
    }
     
  }




var sphere1 = new Sphere(this.radius=2)
var sphere2 = new Sphere(this.radius=5)
var sphere3 = new Sphere(this.radius=123)

console.log("Sphere1 =", sphere1.calcArea())
console.log("Sphere2 =", sphere2.calcArea())
console.log("Sphere3 =", sphere3.calcArea())



// #### example of Sphere area to check if the function works
// let test1 = 2
// let test2 = 5
// let test3 = 123

// const area =(radius) => {
// return 4*3.14159265359*Math.pow(radius, 2)
// }
// console.log(" Area test1 r=2"  ,area(test1))
// console.log(" Area test2 r=5"  ,area(test2))
// console.log(" Area test1 r=123",area(test3))





// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []



const sum = (array) => {
  let newarr= array.map((value, index) => array.slice(0,index + 1).reduce((a, b) => a + b))
return newarr
}

console.log("Excpected output 5.1 : [2, 6, 51, 60]")
console.log("Challenge 5.1:",sum(numbersToAdd1))

console.log("Excpected output 5.2 : [0, 7, -1, 11]")
console.log("Challenge 5.2:",sum(numbersToAdd2))

console.log("Expected output 5.3 : []")
console.log("Challenge 5.3:",sum(numbersToAdd3))

// let array = [2, 4, 45, 9];
// array2 = array.map((elem, index) => array.slice(0,index + 1).reduce((a, b) => a + b));
// console.log("array2", array2);