class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  // get numWheels(){
  //   return '4';
  // }
  numWheels = 4;
}

class Motorcycle extends Vehicle {
  numWheels = 2;

  revEngine() {
    return "VROOM!";
  }
}

class Garage {
  constructor(cap) {
    this.vehicles = [];
    this.capacity = cap;
  }
  add(vecl) {
    if (!(this.vehicles.length >= this.capacity)) {
      if (
        vecl.constructor.name === "Car" ||
        vecl.constructor.name === "Vehicle" ||
        vecl.constructor.name === "Motorcycle"
      ) {
        this.vehicles.push(vecl);
      } else console.log("Only vehicles are allowed in here!");
    } else console.log("Sorry, were full");
  }
}

const firstVehicle = new Vehicle("Mecury", "Marener", "2005");

const newCar = new Car("Ford", "rxt2", "2015");

const firstMotorcycle = new Motorcycle("Honda", "TEX", "2013");

//use type of;
