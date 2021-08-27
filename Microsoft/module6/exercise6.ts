//https://docs.microsoft.com/pt-br/learn/modules/typescript-generics/4-exercise-implement-generics-interfaces-classes

interface ProcessIdentity< T, U > {
    (value: T, message: U) : T;
}

function ProcessIdentity <T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = ProcessIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
//let returnString1 = processor('Hello!', 100);   // Type check error