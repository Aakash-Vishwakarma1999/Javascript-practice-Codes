class House{
    constructor(){
        console.log("constructor called");
        
    }
}
const obj = new House();
const obj1 = new House();

////////////////////////////////////
class House1{
    constructor(nDoors, windows){
        this.nDoors = nDoors;
        this.windows = windows;
    }

    showData(){
        console.log(this.nDoors, this.windows);
        
    }
}

const obj = new House1(5,10);
const obj1 = new House1(7,12);
obj.showData();
obj1.showData();


/////////////////////////////////////
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();
