// 🧠 Beginner Level (Core Concepts)
// Create a class Person with properties name and age. Add a method greet() that prints a message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(this.name, this.age);

    }
}

const p = new Person("Aakash", 26);
p.greet()

// Create a class Car with properties brand and speed. Add methods:
// accelerate()
// brake()
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.brand} slowed down to ${this.speed} km/h`);
    }
}
const c = new Car("ferrari", 240);
c.accelerate();
c.brake()


// Create multiple objects using a constructor function (not class syntax).
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);

    }
}

const p1 = new Person("Aakash", 26);
const p2 = new Person("Riya", 22);
const p3 = new Person("Rahul", 30);

p1.greet();
p2.greet();
p3.greet();
// Convert a constructor function into ES6 class syntax.
//conerting above constructor function into Es6 class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const p1 = new Person("Aakash", 26);
const p2 = new Person("Riya", 22);
const p3 = new Person("Rahul", 30);

p1.greet();
p2.greet();
p3.greet();


// Add a method to an object using prototype.
function Person(name, age) {
    this.name = name;
    this.age = age;

    Person.prototype.greet = function () { //Why use prototype? ==> All objects i.e p1 and p2 share one method
        //If you do this ❌: this.greet = function () {} ==> Every object gets its own copy (wastes memory)
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const p1 = new Person("Aakash", 26);
const p2 = new Person("Riya", 22);

p1.greet();
p2.greet();


// Check if a property exists in an object.
const person = {
    name: "Aakash",
    age: 26
};

console.log("name" in person); // true
console.log("city" in person); // false

// Loop through all properties of an object.
const person1 = {
    name: "Aakash",
    age: 26,
    work: "IT"
};

for (let key in person1) {
    console.log(key, person1[key]);
}



// 🔄 Intermediate Level (OOP Principles)
// Create a class Animal and extend it into Dog and Cat. Add different sounds.
class Animal {
    constructor(sound) {
        this.sound = sound
    }
    makeSound(){
        console.log(this.sound);
        
    }   
}
class Dog extends Animal {
    constructor(bark){
        super(bark);
    }
}
class Cat extends Animal {
    constructor(meow){
        super(meow)
    }
}

const d= new Dog("bark");
d.makeSound();
const c= new Cat("Meow");
c.makeSound();

// Use inheritance to reuse methods from a parent class.
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} is meowing`);
    }
}

const d = new Dog("Tommy");
d.eat();   // inherited from Animal
d.bark();  // own method

const c = new Cat("Kitty");
c.eat();   // inherited from Animal
c.meow();  // own method


// Implement method overriding in a child class.
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{
    eat(){
        // super(); not used in overriding
        console.log(`method of child : ${this.name} is eating`);
        
    }
}
const d = new Dog("rocky");
d.eat();

// Create a class with private properties using #.
// Use getters and setters for a property.
// Create a static method in a class and call it.
// Implement encapsulation to restrict direct access to data.