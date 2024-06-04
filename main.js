alert ('Hi Jerry')

//Print
console.log('Hi, developers!')


//Global scope
var score = 0;
console.log (score, 'step1')

score = 100;
console.log (score, 'step2')


//Local scope
let nonscore = 0;
console.log (nonscore, 'new step')

{
    let nonscore = 100;
    console.log(nonscore)
}

{
    let nonscore = 0;
}

// Initialization
const message = "Hello world !";
console.log(message)


// hg
let a = 10, b = 7 ;
if  ( a < b ) {
    console.log('true')
} else {
    console.log('false')
}


const numberone = 5;
const numbertwo = 3;

let sum = numberone % numbertwo; 
console.log(sum)



const name = prompt('What is your name ?')
console.log('My name is ' + name);


const x = prompt ('Give value to x')
const result = x**2 + x * 5 + 6 
console.log(result)
 

let title = prompt('Movie title:');
let genre = prompt('Movie genre');
let releaseYear = prompt('Movie release year');
console.log (`My fav movie is ${title}, a ${genre}, film released in ${releaseYear} `) 


const num = prompt('x :');
console.log(Number(x) +  2);


const y = prompt(' Wsa that leap year ?');
const year = Number(y);
console.log(year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
 

