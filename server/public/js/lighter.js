(function () {
  const SWITH_INTERVAL = 2000;

  class TrafficLighter {
    constructor(selector) {
      this.targetElement = document.querySelector(selector);
      this._isOn = false;
      this._lights = [];
      this._switcher = null;
      this._activeLightIndex = 0;
      this._autoInterval = null;
      this._render();
      this._addEventHandler();
    }

    _render() {
      this.targetElement.innerHTML = `
        <div class="switcher">on/off</div>
        <div class="lights">
          <div class="light red">1</div>
          <div class="light yellow">2</div>
          <div class="light green">3</div>
        </div>`;

      if(this._isOn) {
        this.targetElement.classList.add('active');
      }
      this.targetElement.classList.add('lighter');
      this._lights = this.targetElement.querySelectorAll('.light');
      this._switcher = this.targetElement.querySelector('.switcher');

      console.log(this._lights);
    }

    _addEventHandler() {
      this._lights.forEach((light, i) => {
        light.addEventListener('click', () => {
          if(this._isOn) {
            this._activeLightIndex = i;
            this._switchLight();
          }
        })
      });
      this._switcher.addEventListener('click', () => {
        this._isOn = !this._isOn;
        this._lighterToggle();
      });

      this.targetElement.addEventListener('mouseenter', () => {
        console.log('ENTERED!');
        this._stopInterval();
      });
      this.targetElement.addEventListener('mouseleave', () => {
        console.log('LEAVED!');
        if(this._isOn && !this._autoInterval) {
          this._startInterval();
        }

      });
    }

    _lighterToggle() {
      if (!this._isOn) {
        console.log('SWITCHED OFF LIGHTER');
        this._switchOffLights();
        this._stopInterval();
        this._activeLightIndex = 0;
        this._switcher.closest('.lighter').classList.remove('active');
      } else {
        console.log('SWITCHED ON LIGHTER');
        this._startInterval();
        this._switcher.closest('.lighter').classList.add('active');
        this._switchLight();
      }
    }

    _switchLight () {
      this._switchOffLights();
      this._lights[this._activeLightIndex].classList.add('active');
      console.log(this._activeLightIndex);
    }

    _switchOffLights() {
      this._lights.forEach(light => {
        light.classList.remove('active');
      })
    }

    _startInterval() {
      if (this._isOn) {
        console.log('started');
        this._autoInterval = setInterval(() => {
          console.log('asdas');
          this._activeLightIndex =  this._activeLightIndex < this._lights.length-1
            ? this._activeLightIndex + 1
            : 0;

          this._switchLight()
        }, SWITH_INTERVAL);
      }
    }

    _stopInterval() {
      console.log('stoped');
      clearInterval(this._autoInterval);
      this._autoInterval = null;
    }

    get isOn () {
      return this._isOn;
    }

    lighterOn () {
      this._isOn = true;// flag
      this._lighterToggle();
    }

    lighterOff () {
      this._isOn = false;// flag
      this._lighterToggle();
    }
  }

  window.TrafficLighter = TrafficLighter;
})();
