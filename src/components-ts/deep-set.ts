//interfaz recursiva
interface MyObject {
  [key: string]: number | MyObject;
}

const myObjectSet: MyObject = {};

const deepSet = (value: number, object: MyObject, ...keys: string[]) => {
  if (!keys.length) {
    return console.log("Do nothing");
  } else {
    const lastKey = keys.pop();

    keys.reduce((currentObject: MyObject, key: string) => {
      if (!(key in currentObject)) {
        currentObject[key] = {} as MyObject;
      }
      return currentObject[key] as MyObject;
    }, object)[lastKey as string] = value;
  }
};


const deepSetButton = document.getElementById("deepSetButton") as HTMLElement;
deepSetButton.addEventListener("click", function (event: Event) {
    event.preventDefault();
    console.log("Deep Set:");
    deepSet(1, myObjectSet, "a", "b");
    console.log(JSON.stringify(myObjectSet)); // {a: { b: 1}}
    deepSet(2, myObjectSet, "a", "c");
    console.log(JSON.stringify(myObjectSet)); // {a: { b: 1, c: 2}}
    deepSet(3, myObjectSet, "a");
    console.log(JSON.stringify(myObjectSet)); // {a: 3}
    deepSet(4, myObjectSet);
    console.log(JSON.stringify(myObjectSet)); // Do nothing // {a: 3}     
});

