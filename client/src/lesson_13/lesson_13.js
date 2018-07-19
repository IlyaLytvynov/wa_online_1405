import './lesson_13.scss';
import { Select } from './components/select/select';
import { SelectManager } from "./components/select-manager/select-manager";

const countries = [
  'USA',
  'UKRAINE',
  'GERMANY',
  'FRANCE',
  'GREAT BRITAIN',
  'CHINA',
  'JAPAN'
];
const movies = [
  'Avatar',
  'Shrek',
  'Interstellar',
  'Pulp fiction'
];

const manager = new SelectManager(document.querySelector('.place-for-manager'));
const btn = document.querySelector('#testBtn');

// const john = {
//   name: 'John',
//   talk: test,
//   doSomeThing: function () {
//     // this -> john
//     console.log(this);
//     console.log('Soime thing finished');
//   }
// };

class User {
  constructor(name) {
    this.btn = document.querySelector('#testBtn');
    this.name = name;
    
    this.btn.addEventListener('click', () => {
      this.doSomeThing();
    });
  }

  doSomeThing() {
     // this -> john
     console.log(this.name);
     console.log('Soime thing finished');
  }
}

class Car {
  move() {
    console.log('I\'m moving');
  }
  stop() {
    console.log('I have stoped');
  }
}

class CarElectric extends Car {
  constructor() {
    super();
    this.batteryCopacity = 100;
  }
  move() {
    this.batteryCopacity--;
    console.log('Moved 1km, battery left ', this.batteryCopacity);
  }
}

class CarDiesel extends Car {
  constructor() {
    super();
    this.fuelCapacity = 50;
  }
  move() {
    this.fuelCapacity--;
    console.log('Moved 1km, fuel left ', this.fuelCapacity);
  }
}

class Driver {
  constructor(car) {
    this.car = car;
  }
  drive() {
    this.car.move();
  }

  stop() {
    this.car.stop();
  }
}

const tesla = new CarElectric();
const someCar = new Car();
const bmw = new CarDiesel();
const johndriver = new Driver(someCar);

tesla.move();
tesla.move();
tesla.move();
tesla.stop();
// btn.addEventListener('click', function() {
//   john.doSomeThing();
// });// callback function 