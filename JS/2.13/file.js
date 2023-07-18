"use strict";

// let i = 0;

// while (i < 10){
//     alert(i);
//     i++
// }


// let i = 3;

// while (i) alert(i--);


// let i = 0;
// do {
//     alert(i);
//     i++;
// } while( i < 5);

// let i = 0;

// for (i = 0; i < 3; i++){
//     alert(i);
// }

// for (; i < 3; i++) {
//     alert(i)
// }

// for (; i < 3;) {
//     alert(i++)
// }

// for(;;){
//     alert(i)
// }

 //alert(i);

// let sum = 5;

// while (true) {

//     let value = +prompt("Введите число", '');
//     sum += value;
//     if (value) break;

// }
// alert( 'Сумма: ' + sum );


// for (let i = 0; i < 10; i++){
//     if (i % 2 == 0) continue;

//     alert(i)
// }



// outer: for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         let input = prompt(`Values (${i} ${j})`, '');

//         if (!input) break outer;
//     }
// }
// alert("nice")



// let i = 3;

// while (i) {
//     alert( i-- );
// }

// for ( let i = 2; i <= 10; i++) {
//     if (i % 2 == 0){ 
//         alert(i);
//     }
    
// }

// let i = 0;

// while (i < 3){
//     alert(`number ${i++}`)
// }

// number:
// while(true) {

//     let i = prompt("Число больше 100", '');
//         if (i > 100) break number ;

// }


// let num;

// do {
//     num = prompt("Число больше 100", '');

// }while (num <= 100 && num);



let n= 10;
NextNum:
for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++){
        if (i % j == 0) continue NextNum;
            
        
    }
    alert(i)

}


