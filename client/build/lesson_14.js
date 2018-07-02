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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lamp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ENABLE_CLASS_NAME = 'lamp_toggle';

var Lamp = exports.Lamp = function () {
  function Lamp(target, addHandler) {
    _classCallCheck(this, Lamp);

    this.target = target;
    this.isEnabled = false;
    this.addHandler = addHandler;
    this.render();
  }

  _createClass(Lamp, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.lamp = document.createElement('div');
      this.lamp.classList.add('lamp');
      this.lamp.addEventListener('click', function () {
        _this.toggle();
      });

      this.target.appendChild(this.lamp);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.isEnabled) {
        this.disable();
      } else {
        this.enable();
      }

      this.addHandler(this);
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.isEnabled = true;
      this.lamp.classList.add(ENABLE_CLASS_NAME);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.isEnabled = false;
      this.lamp.classList.remove(ENABLE_CLASS_NAME);
    }
  }]);

  return Lamp;
}();

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lamp = __webpack_require__(1);

var _lampManager = __webpack_require__(38);

var lamp1 = new _lamp.Lamp(document.querySelector('#place-for-lamp'));
var lampCollection = new _lampManager.LampManager(document.querySelector('#lamps-collection'));

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LampManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lamp = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BUTTON_ADD_TEXT = 'Add lamp';
var BUTTON_TOGGLE_TEXT = 'Toggle All';

var LampManager = exports.LampManager = function () {
  function LampManager(target) {
    _classCallCheck(this, LampManager);

    this.target = target;
    this.lamps = [];
    this.enabledLamps = [];
    this.render();
  }

  _createClass(LampManager, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.btnAdd = document.createElement('button');
      this.btnToggleAll = document.createElement('button');
      this.output = document.createElement('div');

      this.btnAdd.textContent = BUTTON_ADD_TEXT;
      this.btnToggleAll.textContent = BUTTON_TOGGLE_TEXT;

      this.btnAdd.addEventListener('click', function () {
        return _this.addLamp();
      });
      this.btnToggleAll.addEventListener('click', function () {
        return _this.toggleAll();
      });

      this.target.appendChild(this.btnAdd);
      this.target.appendChild(this.btnToggleAll);
      this.target.appendChild(this.output);
    }
  }, {
    key: 'addLamp',
    value: function addLamp() {
      var _this2 = this;

      var newLamp = new _lamp.Lamp(this.output, function (param) {
        return _this2.onLampToggle(param);
      });
      this.lamps.push(newLamp);
    }
  }, {
    key: 'toggleAll',
    value: function toggleAll() {
      if (this.enabledLamps.length > 0) {
        this.enabledLamps.forEach(function (lamp) {
          return lamp.disable();
        });
        this.enabledLamps = [];
      } else {
        this.lamps.forEach(function (lamp) {
          return lamp.enable();
        });
        this.enabledLamps = Array.from(this.lamps);
      }
    }
  }, {
    key: 'onLampToggle',
    value: function onLampToggle(lamp) {
      if (lamp.isEnabled) {
        this.enabledLamps.push(lamp);
      } else {
        var indexOfLamp = this.enabledLamps.indexOf(lamp);
        this.enabledLamps.splice(indexOfLamp, 1);
      }
    }
  }]);

  return LampManager;
}();

/***/ })

/******/ });