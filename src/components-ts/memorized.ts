const expensiveFunction = (): number => {
  console.log("Una única llamada");
  return 3.1415;
};

const memorize = (f: () => number): number => {
  let value;
  return value ? value : (value = f());
};


//Apartado C

let count: number = 0; // Comprobacion de nº de ejecuciones
type TextFunction = (repetitions: number, text: string) => string;

const repeatText: TextFunction = (repetitions, text) => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize = (f: TextFunction): TextFunction => {
    //almacenaremos la combinaciones ya usadas.
    const values: { [key: string]: string } = {};
    
    //se calcula la combinación
    return (repetitions: number, text: string): string => {
        const value = `text:${text},repititions:${repetitions}`;
        
        //si ya existe se devuelve
        if (value in values) {
            return values[value];
        }
        
        //si no existia se calcula.
        const result = f(repetitions, text);
        values[value] = result; //se almacena
        return result;
    };
};

const memorizedGreet = memoize(repeatText);    

const memorizedButton = document.getElementById(
    "memorizedButton"
    ) as HTMLElement;
    memorizedButton.addEventListener("click", function (event: Event) {
        event.preventDefault();

        const memorized: number = memorize(expensiveFunction);
        console.log(memorized); // Una única llamada // 3.1415
        console.log(memorized); // 3.1415
        console.log(memorized); // 3.1415

        console.log(memorizedGreet(1, "pam")); // pam
        console.log(memorizedGreet(3, "chun")); // chun chun chun
        console.log(memorizedGreet(1, "pam")); // pam
        console.log(memorizedGreet(3, "chun")); // chun chun chun
        console.log(count); // 2
    });