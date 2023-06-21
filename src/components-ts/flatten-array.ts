//Alias recursivo con tipado generico
 export type Lista<T> = (T | Lista<T>)[];

const sample: Lista<number> = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

//funcion recursiva con tipado generico
function flattenArray<T>(array: Lista<T>): T[] {
  const result: T[] = [];

  array.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

const flattenButton = document.getElementById(
  "flattenButton"
) as HTMLElement;
flattenButton.addEventListener("click", function (event: Event) {
  event.preventDefault();
  console.log(flattenArray(sample));
});
