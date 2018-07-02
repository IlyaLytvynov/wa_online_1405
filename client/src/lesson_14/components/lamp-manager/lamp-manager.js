import { Lamp } from '../lamp/lamp.js'

const BUTTON_ADD_TEXT = 'Add lamp';
const BUTTON_TOGGLE_TEXT = 'Toggle All';

export class LampManager {
  constructor(target) {
    this.target = target;
    this.lamps = [];
    this.enabledLamps = [];
    this.render();
  }

  render() {
    this.btnAdd = document.createElement('button');
    this.btnToggleAll = document.createElement('button');
    this.output = document.createElement('div');

    this.btnAdd.textContent = BUTTON_ADD_TEXT;
    this.btnToggleAll.textContent = BUTTON_TOGGLE_TEXT;

    this.btnAdd.addEventListener('click', () =>  this.addLamp());
    this.btnToggleAll.addEventListener('click', () => this.toggleAll());

    this.target.appendChild(this.btnAdd);
    this.target.appendChild(this.btnToggleAll);
    this.target.appendChild(this.output);
  }

  addLamp() {
    const newLamp = new Lamp(this.output, (param) => this.onLampToggle(param));
    this.lamps.push(newLamp);
  }

  toggleAll() {
    if (this.enabledLamps.length > 0) {
      this.enabledLamps.forEach((lamp) => lamp.disable());
      this.enabledLamps = [];
    } else {
      this.lamps.forEach((lamp) => lamp.enable());
      this.enabledLamps = Array.from(this.lamps);
    }
  }

  onLampToggle(lamp) {
    if (lamp.isEnabled) {
      this.enabledLamps.push(lamp);
    } else {
      const indexOfLamp = this.enabledLamps.indexOf(lamp);
      this.enabledLamps.splice(indexOfLamp, 1);
    }
  }
}