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

module.exports = Triangle;