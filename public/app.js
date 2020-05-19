"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Bob', 'Mushrooms', 42);
var invTwo = new Invoice('John', 'Beer', 86);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Mario';
invOne.amount = 400;
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
