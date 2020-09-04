class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle extends Point {
  constructor(x) {
    super(x);
  }

    triangleGaussArea() {

      if (typeof firstPoint.x === "number" && typeof secondPoint.x === "number" && typeof thirdPoint.x === "number" && typeof firstPoint.y === "number" && typeof secondPoint.y === "number" && typeof thirdPoint.y === "number") {
      
        return 0.5 * (firstPoint.x * secondPoint.y + secondPoint.x * thirdPoint.y + thirdPoint.x * firstPoint.y - secondPoint.x * firstPoint.y - thirdPoint.x * secondPoint.y - firstPoint.x * thirdPoint.y)*(-1);
        } else { 
          return "Exception: the area could not be calculated"
        }
    }
}

let firstPoint = new Point(1, 2);
let secondPoint = new Point(2, 10);
let thirdPoint = new Point(16, -10)
let newTriangle = new Triangle(firstPoint, secondPoint, thirdPoint);
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