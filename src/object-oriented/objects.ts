class Animal {
  // --------parametar makes  code easier------//

  // name: string;
  // spacis: string;
  // sound: string;

  // <------------/>

  // parametar proparty make code easy
  constructor(
    public name: string,
    public spacis: string,
    public sound: string
  ) {
    // --------parametar makes  code easier------//
    // (this.name = name),
    // (this.spacis = spacis),
    // this.sound = sound;
    // <------------/>
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shephard", " dog", "gew gew");
const cat = new Animal("parsian", "cat", "mew mew");
dog.makeSound();

cat.makeSound();
