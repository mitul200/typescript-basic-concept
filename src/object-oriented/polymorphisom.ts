class parents {
  takeNap() {
    console.log("I am sleeping");
  }
}

class stadunts extends parents {
  takeNap(): void {
    console.log("im sleeping 10 hours");
  }
}
class developer extends parents {
  takeNap(): void {
    console.log(`Im sleeping  9 hours`);
  }
}

function getNap(params: parents) {
  params.takeNap();
}

const pareson1 = new parents();
const pareson2 = new stadunts();
const pareson3 = new developer();

getNap(pareson1);
getNap(pareson2);
getNap(pareson3);

class Shape {
  getArea() {
    return 0;
  }
}

class circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }
  getArea(): number {
    return Math.PI * this.radious * this.radious;
  }
}

class rectangle extends Shape {
  hight: number;
  width: number;
  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }
  getArea(): number {
    return this.hight * this.width;
  }
}

function getAreaOfShape(params: Shape) {
  console.log(params.getArea());
}

getAreaOfShape(new circle(10));
getAreaOfShape(new rectangle(10, 3));
