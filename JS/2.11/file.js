"use strict";

// let time = prompt("Time?", '9');
// let isWeekend = true;

// if (time < 10 || time > 18 || isWeekend){
//     alert("Close")
// }else {
//     alert("Open")
// }

// alert( 0 || 2 || 3);
// alert(true || 'text');

// alert(null || 0 || false);

// let currentUser = null;
// let defaultUser = "Jo";

// let name = (currentUser || defaultUser || "noname");
// alert(name)



// let x;

// false || (x = 5);
// alert(x)



// let hour = prompt("Hour?", '');
// let minute = prompt("Minute?", '');

// if (hour == 10 && minute == 30){
//     alert("Time is 10:30")
// }else {
//     alert('No')
// }


// alert( 2 && 5 && null && 1)
// alert( 2 && 5 && 1)



// let x = 1;

// (x > 0) && alert("nice")

// alert(!'text')
// alert(!!'text')
// alert(!!null)

// let age = prompt("Age", '');

// if(age >= 14 && age <= 90){
//     alert("bibi")
// }



// let age = prompt("Age", '');

// if(age <= 14 || age >= 90){
//     alert("bibi")
// }

// if (!(age > 14) || !(age < 90)){
//     alert("bibi")
// }

let successUser = prompt("Кто вы?", '');
let successPassword;

if (successUser == "admin"){
    successPassword = prompt("Введите пароль", '')

        if (successPassword == "Я главный"){
            alert("Welcome")
        }else if(successPassword == '' || successPassword == null){
            alert("close")
        }else{
            alert("пароль неверный")
        }
        
}else if(successUser === null || successUser === '') {
    alert("close")
}else{
    alert("Я вас незнаю")
}



