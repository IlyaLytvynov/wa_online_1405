import '../styles/lighter.scss';

export function lighter(targetEl) {
  const DISABLED_LIGHTER_CLASS_NAME = 'street-lighter_disabled';
  const ACTIVE_LIGHT_CLASS_NAME = 'street-lighter__light_active';

  let lights = ['red', 'yellow', 'green'];
  let btn;

  let isDisabled = targetEl.classList.contains(DISABLED_LIGHTER_CLASS_NAME);
  let activeLightIndex = 0;
  let intervalId;

  function toggleOffLights() {
    lights[activeLightIndex].classList.remove(ACTIVE_LIGHT_CLASS_NAME);
  }

  function lightsSwitcher(light) {
    activeLightIndex = lights.indexOf(light);
    light.classList.add(ACTIVE_LIGHT_CLASS_NAME);
  }

  function toggleLighter() {
    if(isDisabled === true) {
      enableLighter();
    } else {
      disableLighter()
    }
  }

  function enableLighter() {
    isDisabled = false;
    targetEl.classList.remove(DISABLED_LIGHTER_CLASS_NAME);
    lightsSwitcher(lights[activeLightIndex]);
    startInterval();
  }

  function disableLighter() {
    isDisabled = true;
    targetEl.classList.add(DISABLED_LIGHTER_CLASS_NAME);
    toggleOffLights();
    stopInterval();
  }

  function addEventHandlers() {
    for (let i = 0; i < lights.length; i++) {
      lights[i].addEventListener('click', function() {
        if(isDisabled === false) {
          toggleOffLights();
          lightsSwitcher(lights[i]);
        }
      })
    }
    targetEl.addEventListener('mouseenter', function () {
     stopInterval();
    });
    targetEl.addEventListener('mouseleave', function () {
      if (isDisabled === false) {
        startInterval();
      }
    });
  }

  function nextEnableLight() {
    toggleOffLights();

    if (activeLightIndex + 1 >= lights.length) {
      activeLightIndex = 0;
    } else {
      activeLightIndex++;
    }

    lightsSwitcher(lights[activeLightIndex]);
  }

  function startInterval() {
    if (intervalId === undefined) {
      intervalId = setInterval(function () {
        nextEnableLight();
      }, 1000);
    }
  }

  function stopInterval() {
    clearInterval(intervalId);
    intervalId = undefined;
  }

  function render() {
    renderBtn();
    lights = lights.map(renderLight);
    targetEl.classList.add('street-lighter', 'street-lighter_disabled')
  }

  function renderBtn() {
    btn = document.createElement('button');

    btn.classList.add('street-lighter__btn');
    btn.textContent = 'on/off';
    btn.addEventListener('click', toggleLighter);

    targetEl.appendChild(btn);

  }

  function renderLight(lightName) {
    const lightEl = document.createElement('div');

    lightEl.classList.add(`street-lighter__light`, `street-lighter__light_${lightName}`);

    lightEl.addEventListener('click', function() {
      if (isDisabled === false) {
        toggleOffLights();
        lightsSwitcher(lightEl);
      }
    });

    targetEl.appendChild(lightEl);

    return lightEl;
  }

  render();
  addEventHandlers();
}
