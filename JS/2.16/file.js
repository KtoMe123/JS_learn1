"use strict";

// let func = function(){
//     alert("hi")
// };

// let use = func;

// use()



// function ask(question = "question", yes = "yes", no = "no"){
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert( "Вы согласны." );
// }

// function showCancel() {
//     alert( "Вы отменили выполнение." );
// }


// ask(
//     "Вы согласны",
//     function() { alert( "Вы согласны." );},
//     function() { alert( "Вы отменили выполнение." );}
// )




// let sayHi = function(name) {
//     alert( `Привет, ${name}` );
// }
// sayHi("Вася"); 


let age = prompt("how old?", '18');

// let welcome;

// if ( age < 18){
//     welcome()
//     function welcome(){
//         alert('Hi!')
//     }
    
// }else{
//     welcome()
//     function welcome(){
//         alert("Welcome!")
//     }
// }

let welcome = ( age < 18 ) ?
    function() { alert('Hi!');} :
    function() { alert("Welcome!");} ;

welcome();


