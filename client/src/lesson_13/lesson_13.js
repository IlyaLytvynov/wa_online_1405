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



// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greet() {
//     console.log('THIS', this);
//     console.log('NAME', this.name);
//     console.log('age', this.age);
//   }
//
//   test() {
//     console.log('TEST', this);
//   }
// }
