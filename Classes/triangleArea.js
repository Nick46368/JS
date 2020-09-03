class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2  = point2;
        this.point3 = point3;
    }

    triangleArea() {
      let distanceBetweenP1AndP2 = Math.sqrt((this.point2.x2 - this.point1.x1) ** 2 + (this.point2.y2 - this.point1.y1));

      let distanceBetweenP2AndP3 = Math.sqrt((this.point3.x3 - this.point2.x2) ** 2 + (this.point3.y3 - this.point2.y2));

      let distanceBetweenP3AndP1 = Math.sqrt((this.point1.x1 - this.point3.x3) ** 2 + (this.point1.y1 - this.point3.y3));

      let halfOfThePerimetr = (distanceBetweenP1AndP2 + distanceBetweenP2AndP3 + distanceBetweenP3AndP1) / 2;

      return Math.sqrt(halfOfThePerimetr*(halfOfThePerimetr - distanceBetweenP1AndP2) * (halfOfThePerimetr - distanceBetweenP2AndP3) * (halfOfThePerimetr - distanceBetweenP3AndP1));
    }
}

let newTriangle = new Triangle({'x1': 1, 'y1': 2}, {'x2': 2, 'y2': 10}, {'x3': 16, 'y3': -10});
console.log(newTriangle.triangleArea());