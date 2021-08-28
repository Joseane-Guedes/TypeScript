// O typescript fornece duas maneiras de organizar o codigo: namespaces e módulos.
// https://docs.microsoft.com/pt-br/learn/modules/typescript-work-external-libraries/1-introduction


export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}