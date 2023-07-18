"use strict";

// let a = "MEN";

// function showMessage(){
//     a = "Man";
//     let message = "hello! " + a;
//     alert(message);
// }

// alert(a);

// showMessage();

// alert(a);



// function showMessage(from = 'none', text = 'empty'){

//     from = '*' + from + '*';

//     alert(from + ': ' + text);
    
// }

// let from = "price"

// showMessage(from, "$10")
// showMessage(from, "$25")

// alert(from)



// function sum(a, b){
//     return a + b;
// }

// let result = sum(5, 15);
// alert(result)



// function checkAge(age){
//     if ( age >= 18){
//         return true;
//     }
// }

// let age = prompt('Сколько лет', '');

// if (checkAge(age)) {
//     alert('nice');
// }else{
//     alert("no no")
// }


// let age = 44;
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age){
//     return (age > 18) || confirm('Родители разрешили?');
// }


// function checkMin(one = 0, two = 0){
//     if (one > two){
//         alert(two);
//     }else{
//         alert(one);
//     }
// }

// checkMin(1, 5)
// checkMin(6, 8)

function calcPow(one, two){
    let x = one**two
    alert(x)
}

let one = prompt("x?", '')
let two = prompt("y?", '')

if(one < 1 || two < 1){
    alert("no") 
    
}else{
    calcPow(one, two)
}

