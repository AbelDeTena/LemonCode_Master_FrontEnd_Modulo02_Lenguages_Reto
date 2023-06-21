const understandingButton = document.getElementById(
  "understandingButton"
) as HTMLElement;
understandingButton.addEventListener("click", function (event: Event) {
  event.preventDefault();
  
//¿Existe alguna forma de que la expresión `x === x` de como resultado `false`?
let x:number = NaN;

console.log("console.log(x === x);", x === x); // false

//Habiendo resuelto la **Cuestión l**, ¿como implementarías una función que compruebe si un determinado valor es `NaN`?

const isNaNValue = (v:number):boolean => isNaN(v);

console.log("console.log(isNaNValue(NaN))", isNaNValue(NaN)); // true

//Habiendo resuelto la **Cuestion 2** ¿Existe alguna forma de que la expresión `!isNaNValue(x) && x !== x` de como resultado `true`?


x !== x; //unicamente devuelve true en el caso de que el valor sea NaN

!isNaNValue(x); //devuelve false en el caso de que el valor sea NaN

console.log(
  "console.log(!isNaNValue(x) && x !== x)",
  !isNaNValue(x) && x !== x
); // false  - son dos condiciones incompatibles.

//¿Podrías dar con alguna forma de que la expresión `x + 1 === x - 1` arroje `true`?

x = Infinity;

console.log("console.log(x + 1 === x - 1)", x + 1 === x - 1); // true

//Se te ocurre alguna forma de hacer que la expresión `x > x` de como resultado `true`?

x = NaN;
console.log("console.log(x > x)", x > x); // el unicó caso que permite que x sea distinto de x es NaN. Y NaN siempre devuelve False en comparaciones.
 
});
