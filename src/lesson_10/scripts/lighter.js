import '../styles/lighter.scss';

export function lighter(lighter) {
  const DISABLED_LIGHTER_CLASS_NAME = 'street-lighter_disabled';
  const ACTIVE_LIGHT_CLASS_NAME = 'street-lighter__light_active';

  const lights = Array.from(lighter.querySelectorAll('.street-lighter__light'));
  const btn = lighter.querySelector('.street-lighter__btn');

  let isDisabled = lighter.classList.contains(DISABLED_LIGHTER_CLASS_NAME);
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
    lighter.classList.remove(DISABLED_LIGHTER_CLASS_NAME);
    lightsSwitcher(lights[activeLightIndex]);
    startInterval();
  }

  function disableLighter() {
    isDisabled = true;
    lighter.classList.add(DISABLED_LIGHTER_CLASS_NAME);
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
    btn.addEventListener('click', toggleLighter);
    lighter.addEventListener('mouseenter', function () {
     stopInterval();
    });
    lighter.addEventListener('mouseleave', function () {
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

  addEventHandlers();
}
