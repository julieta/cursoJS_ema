var x;
var y = 2;
console.log(y);
console.log("-----------------------------");

//---------------------Declaración de cadenas-----------------------//
var hello = "hello";
console.log(hello);
console.log("-----------------------------");

//-------------------Multiplicación y división - Incremento y decrementación-------------------------//

var i = 5;

console.log("i", i);

var j = i++;
console.log("j", j); ///////--- preguntar ema----/////////

var k = ++i;
console.log("k", k);

var p = --i;
console.log("p", p);
console.log("-----------------------------");

//-------------------concatenación-------------------------//
var foo = 1;
var bar = "2";
console.log("Concatenación:", foo + bar);

var foo = 1;
var bar = "2";

console.log("Concatenación:", foo + Number(bar)); // el constructor 'Number' obliga a la cadena comportarse como un número.
console.log("-----------------------------");

//-------------------Condición-------------------------//
var bar = true;
var foo = bar ? 1 : 0;

console.log(foo);
console.log("-----------------------------");

//-------------------bucles-------------------------//
m = 0;
while (m < 10) {
  // Este bloque de código se ejecutará 10 veces
  console.log("Actualmente en " + m);
  m++; // incrementa la variable i
}

console.log("-----------------------------");

//-------------------Array-------------------------//
var myArray = ["hello", "world"];
myArray.push("new");

console.log(myArray);

console.log("-----------------------------");

//-------------------objetos-------------------------//
const objeto = {
  nombre: "juli",
  mascota: ["ninguna", "perro", "gato"],
};

console.log(objeto.nombre, "no tiene", objeto.mascota[0], "mascota");
console.log("-----------------------------");

//-------------------funciones-------------------------//

const people = function (name, last_name) {
  var text = name + " " + last_name;
  console.log("Nombre y Apelledo:", text);
  console.log("Name and Last Name:", name + " " + last_name);
};

people("Julieta", "Lopez");
people("Marcela", "Pereyra");
people("Oscar", "Reyes");
