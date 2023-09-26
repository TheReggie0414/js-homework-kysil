// Prototype inheritance


const university = {
    universityName: "Polytechnic",
    dean: "John Doe",
  };
  
  const faculty = Object.create(university);
  
  faculty.facultyName = "Computer Science";
  faculty.groups = [];
  
  faculty.enlistStudent = function (studentName) {
    if (this.groups.length === 0 || this.groups[this.groups.length - 1].length === 12) {
      this.groups.push([studentName]);
    } else {
      this.groups[this.groups.length - 1].push(studentName);
    }
  };
  
  console.log(faculty.universityName);

  faculty.enlistStudent("Taras");
  console.log(faculty.groups);
  
  faculty.enlistStudent("Anna");
  console.log(faculty.groups);
  
  faculty.enlistStudent("Bob");
  console.log(faculty.groups);


//   Prototype constructor


function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.getInfo = function () {
    return `This is an animal named ${this.name}`;
  };
  
  function Mammal(name, live) {
    Animal.call(this, name);
    this.live = live;
  }
  
  Mammal.prototype = Object.create(Animal.prototype);
  
  Mammal.prototype.constructor = Mammal;
  
  Mammal.prototype.run = function () {
    return `${this.name} can run`;
  };
  
  function Bird(name, live) {
    Animal.call(this, name);
    this.live = live;
  }
  
  Bird.prototype = Object.create(Animal.prototype);
  
  Bird.prototype.constructor = Bird;
  
  Bird.prototype.fly = function () {
    return `${this.name} can fly`;
  };

  function Dog(name, live, breed) {
    Mammal.call(this, name, live);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Mammal.prototype);

  Dog.prototype.constructor = Dog;

  Dog.prototype.whoIsGoodDog = function () {
    return 'woof woof';
  };

  function Penguin(name, live, species) {
    Bird.call(this, name, live);
    this.species = species;
  }
  
  Penguin.prototype = Object.create(Bird.prototype);
  
  Penguin.prototype.constructor = Penguin;
  
  Penguin.prototype.fly = function () {
    return `${this.name} can't fly`;
  };
  
  Penguin.prototype.swim = function () {
    return `${this.name} can swim`;
  };
  
  // Example usage
  const lion = new Mammal("Lion", "on land");
  const dog = new Dog("Buddy", "on land", "Golden Retriever");
  const penguin = new Penguin("Gray Penguin", "in the water", "Gray");
  
  console.log(lion.getInfo());
  console.log(lion.run());
  console.log(dog.whoIsGoodDog());
  console.log(penguin.fly());
  console.log(penguin.swim());
