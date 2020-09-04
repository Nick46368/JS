"use strict"
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle {
  constructor(firstPoint, secondPoint, thirdPoint) {
    this.firstPoint = firstPoint;
    this.secondPoint = secondPoint;
    this.thirdPoint = thirdPoint;
  }

    triangleGaussArea() {

      if (typeof this.firstPoint.x === "number" && typeof this.secondPoint.x === "number" && typeof this.thirdPoint.x === "number" && typeof this.firstPoint.y === "number" && typeof this.secondPoint.y === "number" && typeof this.thirdPoint.y === "number") {
      
        return 0.5 * (this.firstPoint.x * this.secondPoint.y + this.secondPoint.x * this.thirdPoint.y + this.thirdPoint.x * this.firstPoint.y - this.secondPoint.x * this.firstPoint.y - this.thirdPoint.x * this.secondPoint.y - this.firstPoint.x * this.thirdPoint.y)*(-1);
        } else { 
          return "Exception: the area could not be calculated"
        }
    }
}
let firstPoint1 = new Point(1, 2);
let secondPoint1 = new Point(2, 10);
let thirdPoint1 = new Point(16, -10);
let newTriangle = new Triangle(firstPoint1, secondPoint1, thirdPoint1);
console.log(newTriangle.triangleGaussArea());

// =============================================================================
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }

// class Triangle {
//     constructor(point1, point2, point3) {
//         this.point1 = point1;
//         this.point2  = point2;
//         this.point3 = point3;
//     }
//     triangleGaussArea() {

//       if (typeof this.point1.x1 === "number" && typeof this.point2.x2 === "number" 
//         && typeof this.point3.x3 === "number" && typeof this.point1.y1 === "number" 
//         && typeof this.point2.y2 === "number" && typeof this.point3.y3 === "number") {

//         return 0.5 * (this.point1.x1 * this.point2.y2 + this.point2.x2 * this.point3.y3 + this.point3.x3 * this.point1.y1 
//             - this.point2.x2 * this.point1.y1 - this.point3.x3 * this.point2.y2 - this.point1.x1 * this.point3.y3)*(-1);
//         } else { 
//             return "Exception: the area could not be calculated"
//          }
//     }
// }

// let newTriangle = new Triangle({x1: 1, y1: 2}, {x2: 2, y2: 10}, {x3: 16, y3: -10});
// console.log(newTriangle.triangleGaussArea());