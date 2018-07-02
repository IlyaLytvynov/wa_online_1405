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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(19);

var _widget = __webpack_require__(20);

var _lighter = __webpack_require__(21);

var lighters = document.querySelectorAll('.street-lighter');

(0, _widget.widget)();

for (var i = 0; i < lighters.length; i++) {
  (0, _lighter.lighter)(lighters[i]);
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var user = {
  name: 'Ilya',
  age: '26',
  title: '26asdasd'
};

function isEmpty(someObject) {
  return Object.keys(someObject).length === 0;
}

var empty = isEmpty({});
console.log(empty);
if (empty) {
  console.error('Object is empty');
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widget = widget;
function widget() {
  var btnAdd = document.querySelector('.input__control');
  var input = document.querySelector('.input');
  var inputNative = document.querySelector('.input__native');
  var output = document.querySelector('.output');

  function clickHandler() {
    var previousValue = parseFloat(output.textContent);
    var val = parseFloat(inputNative.value);

    if (!isNaN(val)) {
      output.textContent = previousValue + val;
    }
    inputNative.value = '';
  }

  function focusHandler() {
    input.classList.add('input__focus');
  }

  function blurHandler() {
    input.classList.remove('input__focus');
  }

  btnAdd.addEventListener('click', clickHandler);
  inputNative.addEventListener('focus', focusHandler);
  inputNative.addEventListener('blur', blurHandler);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lighter = lighter;

__webpack_require__(22);

function lighter(lighter) {
  var DISABLED_LIGHTER_CLASS_NAME = 'street-lighter_disabled';
  var ACTIVE_LIGHT_CLASS_NAME = 'street-lighter__light_active';

  var lights = Array.from(lighter.querySelectorAll('.street-lighter__light'));
  var btn = lighter.querySelector('.street-lighter__btn');

  var isDisabled = lighter.classList.contains(DISABLED_LIGHTER_CLASS_NAME);
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

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);