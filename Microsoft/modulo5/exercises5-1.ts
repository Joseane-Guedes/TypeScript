//Modificadores de acesso
//https://docs.microsoft.com/pt-br/learn/modules/typescript-declare-instantiate-classes/5-access-modifiers
//Por padrão, todos os membros de classe são public. Isso significa que eles ficam acessíveis fora da classe que os contém.

/* O TypeScript é um sistema de tipo estrutural. Quando você compara dois tipos diferentes, independentemente de onde eles vieram, se os tipos de todos os membros são compatíveis, dizemos que os próprios tipos são compatíveis. 
No entanto, ao comparar tipos que têm membros privados e protegidos, esses tipos são tratados de forma diferente. Para que dois tipos sejam considerados compatíveis, se um deles tiver um membro privado, o outro deverá ter um membro privado originado na mesma declaração.
 O mesmo se aplica a membros protegidos. */


 //Exercício – Estender uma classe
 //https://docs.microsoft.com/pt-br/learn/modules/typescript-declare-instantiate-classes/9-exercise-use-inheritance-extend-class
/* 
 class ElectricCar extends Car {
    // Properties unique to ElectricCar
        private _range: number;
    // Constructor
        constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }

}
 */
