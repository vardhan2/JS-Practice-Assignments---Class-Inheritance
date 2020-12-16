// import using require

// declare class

// export class using module.exports

const shape = require("./shape");

// declare class
class Circle extends shape {
  constructor() {
    super();
    this.color = shape.color;
  }
  calculateArea() {}
}

// export class using module.exports
module.exports = Circle;
