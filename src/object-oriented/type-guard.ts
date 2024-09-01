// previous codetyp

class Animals {
  name: string;
  spacis: string;
  constructor(name: string, spacis: string) {
    (this.name = name), (this.spacis = spacis);
  }
}

class dogs extends Animals {
  constructor(name: string, spacis: string) {
    super(name, spacis);
  }
  makeBurgs() {
    console.log(`Gew Gew Tom`);
  }
}

class cats extends Animals {
  constructor(name: string, spacis: string) {
    super(name, spacis);
  }
  makeSound() {
    console.log(`mew mew   Pusy`);
  }
}

function isDogs(obj: Animals): obj is dogs {
  return obj instanceof dogs;
}
function isCats(obj: Animals): obj is cats {
  return obj instanceof cats;
}

// strat -guard
function getAnimal(obj: Animals) {
  if (isDogs(obj)) {
    obj.makeBurgs();
  }
  if (isCats(obj)) {
    obj.makeSound();
  }
}
// end-Guard

const animals1 = new dogs("Gerrman", "Gew");
const animals2 = new cats("pusy", "mew");

getAnimal(animals1);
