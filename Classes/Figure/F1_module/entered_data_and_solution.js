"use strict"
const Point = require('./class_Point.js');
const Triangle = require('./class_TriangleAndAreaMethod.js');

let firstPoint1 = new Point(1, 2);
let secondPoint1 = new Point(2, 10);
let thirdPoint1 = new Point(16, -10);
let newTriangle = new Triangle(firstPoint1, secondPoint1, thirdPoint1);
console.log(newTriangle.triangleGaussArea());