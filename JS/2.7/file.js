"use strict";

// 
let value = true;
alert(typeof value);

value = String(value)
alert(typeof value);

// 
let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num);

// 
let age = Number("str");
alert(age);

// 
alert(Number("    777"));
alert(Number("  h  777"));
alert(Number(true));
alert(Number(false));


//
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean("text"));
alert(Boolean(""));
