// Inheritance and Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `This is an animal named ${this.name}.`;
  }
}

class Mammal extends Animal {
  constructor(name, habitat) {
    super(name);
    this.habitat = habitat;
  }

  getInfo() {
    return `${super.getInfo()} It lives in ${this.habitat}.`;
  }

  run() {
    return `${this.name} is running.`;
  }
}

class Bird extends Animal {
  constructor(name, habitat) {
    super(name);
    this.habitat = habitat;
  }

  getInfo() {
    return `${super.getInfo()} It lives in ${this.habitat}.`;
  }

  fly() {
    return `${this.name} can fly.`;
  }
}

class Dog extends Mammal {
  constructor(name, habitat, breed) {
    super(name, habitat);
    this.breed = breed;
  }

  getInfo() {
    return `${super.getInfo()} It is a ${this.breed} dog.`;
  }

  whoIsGoodDog() {
    return 'woof woof';
  }
}

class Penguin extends Bird {
  constructor(name, habitat, species) {
    super(name, habitat);
    this.species = species;
  }

  getInfo() {
    return `${super.getInfo()} It is a ${this.species} species.`;
  }

  fly() {
    return "Can't fly";
  }

  swim() {
    return `${this.name} can swim.`;
  }
}


const lion = new Mammal('Lion', 'Savannah');
console.log(lion.getInfo());
console.log(lion.run());

const sparrow = new Bird('Sparrow', 'Forests');
console.log(sparrow.getInfo());
console.log(sparrow.fly());

const labrador = new Dog('Labrador', 'House', 'Labrador Retriever');
console.log(labrador.getInfo());
console.log(labrador.whoIsGoodDog());

const kingPenguin = new Penguin('King Penguin', 'Antarctica', 'King Penguin');
console.log(kingPenguin.getInfo());
console.log(kingPenguin.fly());
console.log(kingPenguin.swim());
