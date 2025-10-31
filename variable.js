let name = "Ilya";

var number = 42;

const boolean = true;

let undef;

var nothing = null;

const symb = Symbol("id");

let bigInt = 9007199254741991n;


console.log(typeof name);      // "string"
console.log(typeof number);    // "number"
console.log(typeof boolean);   // "boolean"
console.log(typeof undef);     // "undefined"
console.log(typeof nothing);   // "object"
console.log(typeof symb);      // "symbol"
console.log(typeof bigInt);    // "bigint"

let print = document.createElement("div");
print.innerHTML = `
  <p>name: ${name}, type: ${typeof name}</p>
  <p>number: ${number}, type: ${typeof number}</p>
  <p>boolean: ${boolean}, type: ${typeof boolean}</p>
  <p>undef: ${undef}, type: ${typeof undef}</p>
  <p>nothing: ${nothing}, type: ${typeof nothing}</p>
  <p>symb: ${symb.toString()}, type: ${typeof symb}</p>
  <p>bigInt: ${bigInt}, type: ${typeof bigInt}</p>
`;
document.body.appendChild(print);