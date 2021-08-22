/* O TypeScript incentiva o uso das palavras-chave let e const para declarações de variáveis. */
/* Como lembrete, a diferença entre elas é que as declarações let podem ser feitas sem inicialização, 
enquanto as declarações const são sempre inicializadas com um valor. E as declarações const, uma vez atribuídas, 
nunca poderão ser reatribuídas. 

Tipos primitivos
- boolean, number, string, void, null e undefined;

Tipos de objeto e parâmetros de tipo
-Os tipos de objeto são todos os tipos de classe, interface, matriz e literal 
(qualquer coisa que não seja um tipo primitivo).

*/
//Tipo de cadeia de caracteres:

/* let firstName: string = "Josie";
let sentence: string = `My name is ${firstName}. I am new to TypeScript.`;
console.log(sentence); */

//Criando uma enumeração - enum 
// https://docs.microsoft.com/pt-br/learn/modules/typescript-declare-variable-types/4-enums
/* enum ContractStatus {
    Permanent, // 0
    Temp, // 1
    Apprentice // 2
}
 let employeeStatus: ContractStatus = ContractStatus.Apprentice; 
console.log(employeeStatus); //=> 2 */

/* console.log(ContractStatus[employeeStatus]) // =>  Temp */


/* enum ContractStatus {
    Permanent = 1, // 1
    Temp, // 2
    Apprentice // 3
}
 let employeeStatus: ContractStatus = ContractStatus.Apprentice; 
console.log(employeeStatus); //=> 3 */

// Tipos any e unknown no TypeScript

/*  O tipo any é um tipo que pode representar qualquer valor de JavaScript sem restrições.*/
//console.log(randomValue.name);  Logs "undefined" to the console
//randomValue();                   Returns "randomValue is not a function" error
//randomValue.toUpperCase();       Returns "randomValue is not a function" error

//Tipo unknown
/* A principal diferença entre any e unknown é que você não pode interagir com uma variável do tipo unknown; fazer isso gera um erro do compilador. */

//Tipos de união => | 
/* let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid */


//Laboratório – usar tipos no TypeScript 
// 💁 https://docs.microsoft.com/pt-br/learn/modules/typescript-declare-variable-types/8-types-lab
//🍨 https://github.com/MicrosoftDocs/mslearn-typescript/blob/main/code/module-02/m02-end/module02.ts

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */
/* 
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;
    
    firstName = 'Josie';
    lastName = 'Guedes';
    age = 100;
    ukCitizen = false;
    fullName = firstName + " " + firstName;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    } */

/* EXERCISE 2
   TODO: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

/*    let x: number;
   let y: number;
   let a: number;
   
   x = 5;
   y = 7;
   a = x + y;
   
   console.log(a); */

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */
/* 
   enum Season {
       Winter, 
       Spring, 
       Summer,
       Fall
   }

   function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Fall)) */

/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

/*    let randomNumbers: number[] = [];
   let nextNumber: number;
   for (let i = 0; i < 10; i++) {
       nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
       randomNumbers.push(nextNumber);
   }
   
   console.log(randomNumbers); */