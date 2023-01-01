import Calculation from "./calculation.js"

const print = () => {
  console.log("Well, I will print your result. Please wait...");
};

print();
let cal = new Calculation(10, 20);
console.log(cal.sum());
