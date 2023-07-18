"use strict";

// let a = prompt("Number?", '');

// switch (a) {
//     case 3:
//         alert("3");
//         break;
//     case 4:
//         alert("4");
//         break;
//     case 5:
//         alert("5");
//         break;
//     default:
//         alert("no");
// }


// switch (+a){
//     case 4:
//         alert("true");
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 5:
//     case 6:
//         alert("false");
//         break;

//     default:
//         alert("literally no");
// }



// let brow = prompt("Browser?", 'Chrome');

// if(brow == "Edge"){
//     alert( "You've got the Edge!" );
// }else if (brow == "Chrome" || brow == "Firefox" || brow == "Safari" || brow == "Opera"){
//     alert( 'Okay we support these browsers too' );
// }else {
//     alert( 'We hope that this page looks ok!' );
// }

let num = prompt("0-3 Number?", '')

switch (+num){

    case 0:
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
    case 3:
        alert("2 or 3");
        break;
    default:
        alert("no")

}
