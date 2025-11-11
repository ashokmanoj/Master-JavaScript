//Hoisting in javascript

console.log(a);
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization Because 'b' is declared with let and it is in temporal dead zone
let b = 20;

function hoistExample() {
  console.log(c);
  var c = 30;
}

hoistExample(); // ReferenceError: Cannot access 'c' before initialization Because 'c' is declared with let and it is in temporal dead zone


console.log(d);
const d = 40; // ReferenceError: Cannot access 'd' before initialization Because 'd' is declared with const and it is in temporal dead zone
