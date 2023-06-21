import { Lista } from "./flatten-array";

const myTree: Lista<string> = [
  "tronco",
  ["rama", "rama", ["hoja", "hoja"]]["hoja"],
];

const treeButton = document.getElementById("treeButton") as HTMLElement;
treeButton.addEventListener("click", function (event: Event) {
  event.preventDefault();
  console.log(`type Lista<T> = (T | Lista<T>)[];`);
});
