import Point from './class_Point.js'
import Triangle from './class_Triangle.js'

let firstPoint1 = new Point(1, 2);
let secondPoint1 = new Point(2, 10);
let thirdPoint1 = new Point(16, -10);
let newTriangle = new Triangle(firstPoint1, secondPoint1, thirdPoint1);
console.log(newTriangle.triangleGaussArea());