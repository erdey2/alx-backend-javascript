import Currency from "./3-currency.js"
export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
     }
     set amount(amount) {
       if (typeof amount !== 'number') {
          throw new TypeError('amount must be number');
       }
       this._amount = amount;
     }
     get amount() {
	return this._amount;
     }
      
      set currency(currency) {
  
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency must be an instance of Currency class");
        }
        this._currency = currency;
    }
    get currency() {
       return this._currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this.currency._name} (${this.currency._code})`;
    }
   
   static convertPrice(amount, conversionRate) {
     return amount * conversionRate;
   }
}
