//Funções nomeadas

/* function addNumbers (x: number, y: number): number {
    return x + y 
    addNumbers(1,2); 
}
 */

// Funções anônimas

/* let addNumbers = function (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2); */

// Mais uma exemplo de função anonima 🦖 
/*  let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3])); */ // 6 

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers2 = (x: number, y: number): number => x + y;

 