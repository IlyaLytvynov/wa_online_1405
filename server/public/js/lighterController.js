(() => {
  class LightController {
    constructor(targetSelector, lighters) {
      this.targetElement = document.querySelector(targetSelector);
      this.lighters = lighters;
      this._isOn = true;
      this._render();
      this._addEvents();
    }

    _render () {
      this.lighters.forEach(item => {
        if(!item.isOn) {
          this._isOn = false;
        }
      });
      this.targetElement.innerHTML = `<div class="${this._isOn ? 'active' : ''}">Toggle LIGHTERS</div>`;
    }

    _addEvents () {
      this.targetElement.addEventListener('click', () => {
        this._isOn = !this._isOn;
        if(this._isOn) {
          this.lighters.forEach(lighter => {
            lighter.lighterOff();
          });
        } else {
          this.lighters.forEach(lighter => {
            lighter.lighterOn();
          });
        }

      });
    }
  }

  window.LighterController = LightController;
})();