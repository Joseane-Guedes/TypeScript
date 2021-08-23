/* /*  Modulo 3 - Implementando o uso de interfaces no TypeScript.

- Objetivos de aprendizagem:

Depois de concluir este módulo, você será capaz de:
🎭Explicar os motivos para usar uma interface em TypeScript.
🎭Declarar e instanciar uma interface.
🎭Estender uma interface.
🎭Declarar uma interface com tipos de matriz personalizados.

Comandos
npm install -g typescript

O que é uma interface?
Você pode usar interfaces para descrever um objeto, nomear
e parametrizar os tipos do objeto e compor tipos de objetos
nomeados existentes em novos.

Essa interface simples define as duas propriedades e um método de um objeto Employee.

interface Employee {
    firstName: string;
    lastName: string;
}

Observe que a interface não inicializa nem implementa as propriedades declaradas dentro dela. 
Isso ocorre porque o único trabalho de uma interface é descrever um tipo. 
Ela define o que o contrato de código exige, enquanto uma variável, função ou classe que 
implementa a interface atende ao contrato fornecendo os detalhes de implementação necessários


Exercicio: Declarar uma interface com membros
 */

/* interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let iceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
} */

/* console.log(iceCream.flavor); // vanilla
console.log(iceCream.scoops); */ // 2 
/* 
function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));  */// */5 is too many scoops!

 /* Exercício – estender uma interface no TypeScript - 
https://docs.microsoft.com/pt-br/learn/modules/typescript-implement-interfaces/4-extend-interface */

/* Entenda a interface como um contrato de um objeto, ela que define quais os métodos ou propriedades um objeto terá, 
quais serão obrigatórias, quais serão opcionais, quais poderão ser alteradas e quais serão apenas de leitura
 */


interface IceCream {
    flavor: string;
    scoops: number;
 }

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: "chocolate",
    nuts: true
}

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));