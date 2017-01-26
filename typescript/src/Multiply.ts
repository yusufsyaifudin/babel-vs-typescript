class Multiply {

  private a: number;
  private b: number;
  
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
  
  result() {
    return this.a * this.b;
  }
  
}

let multiply = new Multiply(2, 3);
console.log(multiply.a);
console.log(multiply.b);
console.log(multiply.result());