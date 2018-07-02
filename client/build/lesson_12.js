/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(25);

var _lighter = __webpack_require__(26);

var _select = __webpack_require__(28);

(0, _lighter.lighter)(document.querySelector('.here-will-be-lighter'));

var countries = ['USA', 'UKRAINE', 'GERMANY', 'FRANCE', 'GREAT BRITAIN', 'CHINA', 'JAPAN'];
var movies = ['Avatar', 'Shrek', 'Interstellar', 'Pulp fiction'];

(0, _select.select)(document.querySelector('.countries-select'), countries);
(0, _select.select)(document.querySelector('.movies-select'), movies);
accordion(document.querySelector('.movies-select'), [{
  title: 'Item 1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
}, {
  title: 'Item 1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
}]);

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lighter = lighter;

__webpack_require__(27);

function lighter(targetEl) {
  var DISABLED_LIGHTER_CLASS_NAME = 'street-lighter_disabled';
  var ACTIVE_LIGHT_CLASS_NAME = 'street-lighter__light_active';

  var lights = ['red', 'yellow', 'green'];
  var btn = void 0;

  var isDisabled = targetEl.classList.contains(DISABLED_LIGHTER_CLASS_NAME);
  var activeLightIndex = 0;
  var intervalId = void 0;

  function toggleOffLights() {
    lights[activeLightIndex].classList.remove(ACTIVE_LIGHT_CLASS_NAME);
  }

  function lightsSwitcher(light) {
    activeLightIndex = lights.indexOf(light);
    light.classList.add(ACTIVE_LIGHT_CLASS_NAME);
  }

  function toggleLighter() {
    if (isDisabled === true) {
      enableLighter();
    } else {
      disableLighter();
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
    var _loop = function _loop(i) {
      lights[i].addEventListener('click', function () {
        if (isDisabled === false) {
          toggleOffLights();
          lightsSwitcher(lights[i]);
        }
      });
    };

    for (var i = 0; i < lights.length; i++) {
      _loop(i);
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
    targetEl.classList.add('street-lighter', 'street-lighter_disabled');
  }

  function renderBtn() {
    btn = document.createElement('button');

    btn.classList.add('street-lighter__btn');
    btn.textContent = 'on/off';
    btn.addEventListener('click', toggleLighter);

    targetEl.appendChild(btn);
  }

  function renderLight(lightName) {
    var lightEl = document.createElement('div');

    lightEl.classList.add('street-lighter__light', 'street-lighter__light_' + lightName);

    lightEl.addEventListener('click', function () {
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

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = select;

__webpack_require__(29);

var TARGET_CLASS_NAME = 'select';
var TITLE_CLASS_NAME = TARGET_CLASS_NAME + '__title';
var OPTION_CLASS_NAME = TARGET_CLASS_NAME + '__option';
var OPTION_SELECTED_CLASS_NAME = TARGET_CLASS_NAME + '__option_selected';
var OPTIONS_CLASS_NAME = TARGET_CLASS_NAME + '__options';
var LIST_CONTROL_CLASS_NAME = TARGET_CLASS_NAME + '__control';
var EXPAND_CLASS_NAME = TARGET_CLASS_NAME + '_expand';

function select(targetEl, optionsList) {
  var title = void 0;
  var options = void 0;
  var isExpand = false;
  var selectedItem = void 0;

  function render() {
    renderTitle();
    renderOptions();
    targetEl.classList.add(TARGET_CLASS_NAME);
  }

  function renderTitle() {
    title = document.createElement('button');
    title.classList.add(TITLE_CLASS_NAME);
    title.textContent = 'Please select';
    targetEl.appendChild(title);

    title.addEventListener('click', function () {
      if (isExpand) {
        close();
      } else {
        open();
      }
    });
  }

  function renderOptions() {
    options = document.createElement('ul');
    options.classList.add(OPTIONS_CLASS_NAME);

    optionsList.forEach(function (optionText) {
      var listItem = document.createElement('li');
      var listItemControl = document.createElement('button');

      listItemControl.classList.add(LIST_CONTROL_CLASS_NAME);
      listItem.classList.add(OPTION_CLASS_NAME);

      listItemControl.textContent = optionText;
      listItemControl.setAttribute('tab-index', '0');
      listItemControl.addEventListener('click', function () {
        title.textContent = optionText;

        if (selectedItem !== undefined) {
          selectedItem.classList.remove(OPTION_SELECTED_CLASS_NAME);
        }

        listItem.classList.add(OPTION_SELECTED_CLASS_NAME);
        selectedItem = listItem;
        close();
      });

      listItem.appendChild(listItemControl);
      options.appendChild(listItem);
    });

    targetEl.appendChild(options);
  }

  function open() {
    targetEl.classList.add(EXPAND_CLASS_NAME);
    isExpand = true;
  }

  function close() {
    targetEl.classList.remove(EXPAND_CLASS_NAME);
    isExpand = false;
  }

  render();
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });