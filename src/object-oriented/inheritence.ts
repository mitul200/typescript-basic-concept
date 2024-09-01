class parant {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class student extends parant {
  // name: string;
  // age: number;
  // address: string;

  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
  makeSleep(hours: number): string {
    return `This ${this.name} is sleep for ${hours}`;
  }
}

const student1 = new student("khaled", 122, "home");
student1.makeSleep(12);

class Teacher extends parant {
  salary: number;
  constructor(name: string, age: number, address: string, salary: number) {
    super(name, age, address);
    this.salary = salary;
  }
  toTeaching(hours: number): string {
    return `${this.name} will teach ${hours} `;
  }
}

const teacher1 = new Teacher("mitul", 35, "Dhaka", 8);
teacher1.toTeaching(8);
