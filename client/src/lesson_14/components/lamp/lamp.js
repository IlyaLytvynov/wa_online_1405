import './lamp.scss';

const ENABLE_CLASS_NAME = 'lamp_toggle';

export class Lamp {
  constructor(target, addHandler) {
    this.target = target;
    this.isEnabled = false;
    this.addHandler = addHandler;
    this.render();
  }

  render() {
    this.lamp = document.createElement('div');
    this.lamp.classList.add('lamp');
    this.lamp.addEventListener('click', () => {
      this.toggle();
    });

    this.target.appendChild(this.lamp);
  }

  toggle() {
    if(this.isEnabled) {
      this.disable()
    } else {
      this.enable()
    }

    this.addHandler(this);
  }

  enable() {
    this.isEnabled = true;
    this.lamp.classList.add(ENABLE_CLASS_NAME);
  }

  disable() {
    this.isEnabled = false;
    this.lamp.classList.remove(ENABLE_CLASS_NAME);
  }
}