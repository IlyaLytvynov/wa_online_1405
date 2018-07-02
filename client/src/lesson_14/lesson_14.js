import {Lamp} from "./components/lamp/lamp";
import { LampManager } from "./components/lamp-manager/lamp-manager";

const lamp1 = new Lamp(document.querySelector('#place-for-lamp'));
const lampCollection = new LampManager(document.querySelector('#lamps-collection'));

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:4001/list');
xhr.send();
xhr.onreadystatechange = () => {
  console.log('READY STATE CHANGED', xhr.readyState);
  if (xhr.readyState === 4) {
    console.log('RESPONE', JSON.parse(xhr.response), xhr);
  }
};