interface AnyObject {
  [key: string]: any;
}

const myObject: AnyObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (object: AnyObject, ...keys: string[]): any => {
  for (const key of keys) {
    if (key in object) {
      object = object[key];
    } else {
      return undefined;
    }
  }
  return object;
};


const deepAccessbutton = document.getElementById("deepAccessbutton") as HTMLElement;
deepAccessbutton.addEventListener("click", function (event: Event) {
    event.preventDefault();
    console.log("Deep Access:");
    console.log(deepGet(myObject, "x")); // undefined
    console.log(deepGet(myObject, "a")); // 1
    console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
    console.log(deepGet(myObject, "b", "c")); // null
    console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
    console.log(deepGet(myObject)); // {a: 1, b: {...}}    
});
