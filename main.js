//2024:6:3

/*
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
*/



// 2024:6:4

/*
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
*/ 


// 2024:6:5 

// VARIABLE

/* // 1. "Comments can make code readable" - нэг мөртэй коммент болгох

cmd +
*/

/* // 3. Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх

let var1 =1; //number
let var2 = "hello"; //string
let var3 = true; //boolean
let var4 = undefined; //undefined
let var5 = null; //null
*/

/* 4. Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, 
төрлийн утгуудыг шалгах, number, string, boolean, undefined, null гэх мэт

let var1 =1; 
let var2 = "hello";
let var3 = true;
let var4 = undefined;
let var5 = null;
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
*/

/* // 5. Утга оноогоогүй хувьсагч зарлах

let a;
*/

/* // 6. Утга оноосон хувьсагч зарлах

let a = 21;
*/

/* // 7. Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let firstName = "Jerry";
let lastName = "Bat";
let age = "21";
*/

/* // 8. Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах

let firstName = "Jerry"; let lastName = "Bat"; let age = "21";
*/

/* // 9.  Гурвалжингийн периметрийг олох

let = a, b, c;
let p = a + b + c;
console.log(p);
*/

/* // 10. Тойргийн талбайг олох

let num = 5;
let PI = 3.14
let radius = num ** 2 * PI;
console.log(radius);
*/

/* // 11. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. 
Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = 10;
let side2 = 20;
let side3 = 30;
let s = (side1 + side2 + side3)/2
let A = (s * (s - side1)*(s - side2)*(s - side3)) ** (1 / 2);
console.log(A);
*/
 
/* // 12. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
let c = 5;
let f = 0l
f = c * 1.8 + 32;
console.log(f);
*/

/* // 14. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*%) 
гүцэтгээд үр дүнг нь дараах байдлаар харуул:
    Өгөгдсөн 2 тооны нийлбэр нь 25
    Өгөгдсөн 2 тооны ялгавар нь 5

let number1 = 10;
let number2 = 5;
console.log('2 toonii niilber' ${number1 + number2})
*/

/* //15. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
let cm = 5;
let inch = sm * 2.54;
console.log(inch);
*/


// OPERATION PART 1

/* 1. 4 нь 3-аас их үү ?
const a = 3;
const b = 4;
console.log(a < b);
*/

/* 2. 3 нь 4-өөс их үү ?
const a = 3;
const b = 4;
console.log(a > b);
*/

/* 3. 4 нь 3-аас их буюу тэнцүү юу ?
const a = 3;
const b = 4;
console.log(a <= b);
*/

/* 4. 3 нь 4-өөс их буюу тэнцүү юу ?
const a = 3;
const b = 4;
console.log(a >= b);
*/

/* 5. 4 нь 4-тэй тэнцүү юу ?
const a = 4;
const b = 4;
console.log(a = b);
*/

/* 6. 4 нь 4-тэй яг тэнцүү юу ?
const a = 4;
const b = 4;
console.log(a == b);
*/

/* 7. 4 нь 4-тэй тэнцүү биш нь үнэн үү ?
const a = 4;
const b = 4;
console.log(a != b);
*/

/* 11. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
const a = 4, b = 3, c = 10, d = 12;
console.log(a > b && c < d);
*/

/* 12. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
const a = 4, b = 3, c = 10, d = 12;
console.log(a > b && c > d);
*/

/* 13. 4 нь 3-аас их болон 10 нь 12-оос бага нь үнэн үү ?
const a = 4, b = 3, c = 10, d = 12;
console.log(a > b || c < d);
*/

/* 14. 4 нь 3-аас их болон 10 нь 12-оос их нь үнэн үү ?
const a = 4, b = 3, c = 10, d = 12;
console.log(a > b || c > d);
*/

/* 15. 4 нь 3-аас бага эсвэл 10 нь 12-оос их нь үнэн үү ?
const a = 4, b = 3, c = 10, d = 12;
console.log(a < b || c > d);
*/

/* 16. let five = !(4 > 3) ямар хариу буцаах вэ ?
false
*/

/* 17. let six = !(4 < 3) ямар хариу буцаах вэ ?
true
*/

/* 18. let seven = !(4 > 3 && 10 < 12) ямар хариу буцаах вэ ?
false
*/

/* 19. let eight = !(4 > 3 && 10 > 12) ямар хариу буцаах вэ ?
true
*/

/* 20. let nine = !(4 === "4") ямар хариу буцаах вэ ?
true
*/


// OPERATION PART 2

// 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү.
/*
let a = 936, b = 3, c = 9;
const result =  a / b;
const answer = result % c;
console.log(answer)



// 2. Гараас 0-100 хооронд тоон утга авч тохирох үсгэн тэмдэглэгээгээр онц эсвэл сайн эсэхийг буцаа. (A эсвэл B) 


let d = prompt("Дүнгийн үнэлгээг оруул")

if ( a > 90 ){
    console.log("A")
} else
    console.log("B")



// 3 их хувьсагчийг ол

let a = Number(prompt("a хувьсагч: "))
let b = Number(prompt("b хувьсагч: "))

if (a > b) {
    console.log('a хувьсагч их байна')
} else 
    console.log('b хувьсагч их байна')


// 4 их хувьсагчийг ол

let a = Number(prompt("a хувьсагч: "))
let b = Number(prompt("b хувьсагч: "))
let c = Number(prompt("c хувьсагч: "))

if (a > b && a > c) {
    console.log('a хувьсагч их байна')
} else if  (a < b && a > c) {
    console.log('b хувьсагч их байна')
} else 
    console.log('c хувьсагч их байна')

//5 дээрээсээ хоер дахь хувьсагчийг ол

let a = Number(prompt("a хувьсагч: "))
let b = Number(prompt("b хувьсагч: "))
let c = Number(prompt("c хувьсагч: "))
let d = Number(prompt("d хувьсагч: "))

if ((a > b && a > c && a > d) && (b > c && b > d)) {
    console.log('b дээрээсээ хоер дахь хувьсагч байна')
}  else if  ((b > a && b > c && b > d) && (a > c && a > d)) {
    console.log('a дээрээсээ хоер дахь хувьсагч байна')
}  else if  (c > a && c > b && c > d) && (d > a && d > b)) {
    console.log('d дээрээсээ хоер дахь хувьсагч байна')
}  else if  (d > a && d > b && d > c) && (c > a && c > b)
    console.log('c дээрээсээ хоер дахь хувьсагч байна')
    

// 6 Гурвалжин мөн эсэхийг ол

let a = Number(prompt("a хувьсагч: "))
let b = Number(prompt("b хувьсагч: "))
let c = Number(prompt("c хувьсагч: "))

if (a + c > b && a + b > c && b + c > a) {
    console.log('Гурвалжин мөн байна')
} else 
    console.log('Гурвалжин биш байна')

// 7 

let a = Number(prompt(' Тоог оруул: '))
if (a % 2 === 0) {
    console.log('Тэгш тоо байна')
} else 
    console.log('Сондгой тоо байна')

   
// 8

let a = Number(prompt(' Эхний тоог оруул: '))
let b = Number(prompt(' Хоер дахь тоог оруул: '))
let c = Number(prompt(' Гурав дахь тоог оруул: '))
  


  // WHILE LOOP 

let dugaar = 0;
   while (dugaar <  100) {
   console.log(dugaar + 1, "I love you");
   dugaar = dugaar + 1;
   }

// FOR LOOP 
// for (variable; condition; update) {}

for  (let num = 0; num < 100; num++) 
    if (num % 3 === 0) {
        console.log(num, "You look cute today.");
    } else {
     console.log(num, "I fancy you" );
    }

   // 0-с n  хүртэлх тооны нийлбэрийг ол. 

   let n = 0;
   for (let i = 0; i < 20; i++) { 
    n = n + i;
   }
   console.log("the sum of first number is:" ,n)

   // 1-с 10 хүртэлх тоог хэвлэ.

   for (let sum = 0; sum < 10; sum++) {
       console.log (sum +1 )
   }
   

  // 10-20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
   let total = 0
   for (let i = 2; i <= 20; i = i + 2) {
       total = total + i
    }
    console.log("the sum of even num is:", total);

*/
function sumOfNumbers(n, m){
    let sum = 0;
for (let i = n; i <= m; i++) {
    sum = sum + i;
}
return sum;
}

const sumOf3to9 = sumOfNumbers (3, 9);

console.log(sumOf3to9);
alert(sumOf3to9);
document.getElementById("output").innerText = sumOf3to9;




function sumOftwoNumbers() {
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    document.getElementById("output").innerText = sum;
}




