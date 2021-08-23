/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

   /*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
    months: number;
    principle: number,
    interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */

interface ConventionalLoan extends Loan {
    months: number 
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
//Defina o tipo das variáveis interest e payment na função calculateInterestOnlyLoanPayment como numbers.

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
    return 'The interest only loan payment is ' + payment.toFixed(2)
}

//let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5, months: 180});
/* console.log(interestOnlyPayment);  */    //* Returns "The interest only loan payment is 125.00"

let conventionalPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"