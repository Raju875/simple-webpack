export default class Calculation {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    return this.num1 + this.num2;
  }

  sub() {
    return this.num1 - this.num2;
  }

  mul() {
    return this.num1 * this.num2;
  }

  div() {
    return this.num1 / this.num2;
  }

  sqr() {
    return this.num1 ** this.num2;
  }
}
