class Rectangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    get perimeter() {
      return `${this.calcPerimeter(this.base, this.height)}cm`;
    }
  
    get area() {
      return `${this.calcArea(this.base, this.height)}cm2`;
    }
  
    calcPerimeter(base, height) {
      return base * 2 + height * 2;
    }
  
    calcArea(base, height) {
      return base * height;
    }
  }
  
  class Circle {
    constructor(radio) {
      this.radio = radio;
    }
  
    get perimeter() {
      return `${this.calcPerimeter(this.radio)}cm`;
    }
  
    get area() {
      return `${this.calcArea(this.radio)}cm2`;
    }
  
    calcPerimeter(radio) {
      return 2 * Math.PI * radio;
    }
  
    calcArea(radio) {
      return Math.PI * radio ** 2;
    }
  }

console.group('Rectangle')
let rectangle1 = new Rectangle(10, 15)
console.log(rectangle1.perimeter)
console.log(rectangle1.area)
console.groupEnd('Rectangle')

console.group('Circle')
let circle1 = new Circle(5)
console.log(circle1.perimeter)
console.log(circle1.area)
console.groupEnd('Circle')

// Culcular la altura de un triangulo isosceles (dos lados iguales y uno distinto)
function calculateHightTriangle(sides, base) {
    if (sides== base) {
      console.warn('Este no es un triangulo isoceles');
    } else{
        return Math.sqrt(Math.pow(sides, 2) - (Math.pow(base,2)/4))
   
    }
}


