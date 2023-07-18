"use strict";

// let sum = (a, b) => a + b;

// alert( sum(4,10));



// let double = n => n*2;

// alert( double(6));



// let  sayHi = () => alert("hello");

// sayHi();



// let age = prompt("How old?", '');

// let welcome = (age < 18) ?
//     () => alert("hi") :
//     () => alert("welcome") ;

// welcome()



// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };

// alert( sum(1,2));



function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask( 
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
)
