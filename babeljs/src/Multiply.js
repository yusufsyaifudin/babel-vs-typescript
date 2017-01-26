class Multiply {
  
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  
  result() {
    return this.a * this.b;
  }
  
}


let multiply = new Multiply(2, 3);
console.log(multiply.a); // will return 2
console.log(multiply.b); // will return 3
console.log(multiply.result()); // will return 6