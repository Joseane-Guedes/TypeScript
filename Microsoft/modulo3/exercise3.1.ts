// Criar tipos indexáveis - https://docs.microsoft.com/pt-br/learn/modules/typescript-implement-interfaces/5-use-interfaces
//📇  Você pode usar interfaces que descrevem os tipos de matriz em que você pode indexar.
/* 
Os tipos indexáveis têm uma  assinatura de índice  que descreve o tipo que você pode usar para indexar no objeto,
 juntamente com os tipos de retorno correspondentes durante a indexação. */

// exemplo
/* interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr); */