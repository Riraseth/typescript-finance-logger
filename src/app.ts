// classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('Bob', 'Mushrooms', 42);
const invTwo = new Invoice('John', 'Beer', 86);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Mario';
invOne.amount = 400;

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
