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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TARGET_CLASS_NAME = 'select';
var TITLE_CLASS_NAME = TARGET_CLASS_NAME + '__title';
var OPTION_CLASS_NAME = TARGET_CLASS_NAME + '__option';
var OPTION_SELECTED_CLASS_NAME = TARGET_CLASS_NAME + '__option_selected';
var OPTIONS_CLASS_NAME = TARGET_CLASS_NAME + '__options';
var LIST_CONTROL_CLASS_NAME = TARGET_CLASS_NAME + '__control';
var EXPAND_CLASS_NAME = TARGET_CLASS_NAME + '_expand';

var Select = exports.Select = function () {
  /**
   * @param targetEl HTMLElement
   * @param optionsList Array<string>
   * */
  function Select(targetEl, optionsList) {
    _classCallCheck(this, Select);

    this.targetEl = targetEl;
    this.options = optionsList;
    this.isExpand = false;

    this.titleEl = null;
    this.ul = null;
    this.selectedItem = null;
    this.render();
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      this.renderTitle();
      this.renderOptions();
      this.targetEl.classList.add(TARGET_CLASS_NAME);
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      var _this = this;

      this.titleEl = document.createElement('button');
      this.titleEl.classList.add(TITLE_CLASS_NAME);
      this.titleEl.textContent = 'Please select';

      this.targetEl.appendChild(this.titleEl);

      this.titleEl.addEventListener('click', function () {
        if (_this.isExpand) {
          _this.close();
        } else {
          _this.open();
        }
      });
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this2 = this;

      this.ul = document.createElement('ul');
      this.ul.classList.add(OPTIONS_CLASS_NAME);

      this.options.forEach(function (optionText) {
        var listItem = document.createElement('li');
        var listItemControl = document.createElement('button');

        listItemControl.classList.add(LIST_CONTROL_CLASS_NAME);
        listItem.classList.add(OPTION_CLASS_NAME);

        listItemControl.textContent = optionText;
        listItemControl.setAttribute('tab-index', '0');

        listItemControl.addEventListener('click', function () {
          _this2.titleEl.textContent = optionText;

          if (_this2.selectedItem) {
            _this2.selectedItem.classList.remove(OPTION_SELECTED_CLASS_NAME);
          }

          listItem.classList.add(OPTION_SELECTED_CLASS_NAME);
          _this2.selectedItem = listItem;
          _this2.close();
        });

        listItem.appendChild(listItemControl);
        _this2.ul.appendChild(listItem);
      });

      this.targetEl.appendChild(this.ul);
    }
  }, {
    key: 'open',
    value: function open() {
      this.targetEl.classList.add(EXPAND_CLASS_NAME);
      this.isExpand = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.targetEl.classList.remove(EXPAND_CLASS_NAME);
      this.isExpand = false;
    }
  }]);

  return Select;
}();

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

var _select = __webpack_require__(0);

var _selectManager = __webpack_require__(34);

var countries = ['USA', 'UKRAINE', 'GERMANY', 'FRANCE', 'GREAT BRITAIN', 'CHINA', 'JAPAN'];
var movies = ['Avatar', 'Shrek', 'Interstellar', 'Pulp fiction'];

var manager = new _selectManager.SelectManager(document.querySelector('.place-for-manager'));

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greet() {
//     console.log('THIS', this);
//     console.log('NAME', this.name);
//     console.log('age', this.age);
//   }
//
//   test() {
//     console.log('TEST', this);
//   }
// }

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _select = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectManager = exports.SelectManager = function () {
  function SelectManager(targetEl) {
    _classCallCheck(this, SelectManager);

    this.targetEl = targetEl;
    this.selects = [];
    this.render();
  }

  _createClass(SelectManager, [{
    key: 'render',
    value: function render() {
      var _this = this;

      this.addBtn = document.createElement('button');
      this.openAllBtn = document.createElement('button');
      this.closeAllBtn = document.createElement('button');

      this.addBtn.textContent = 'ADD';
      this.openAllBtn.textContent = 'OPEN ALL';
      this.closeAllBtn.textContent = 'CLOSE ALL';

      this.addBtn.addEventListener('click', function () {
        return _this.addSelect();
      });
      this.openAllBtn.addEventListener('click', function () {
        return _this.openAll();
      });
      this.closeAllBtn.addEventListener('click', function () {
        return _this.closeAll();
      });

      this.targetEl.appendChild(this.addBtn);
      this.targetEl.appendChild(this.openAllBtn);
      this.targetEl.appendChild(this.closeAllBtn);
    }
  }, {
    key: 'addSelect',
    value: function addSelect() {
      var options = this.requestOptions();
      var selectWrapper = document.createElement('div');

      var select = new _select.Select(selectWrapper, options);

      this.selects.push(select);
      this.targetEl.appendChild(selectWrapper);
    }
  }, {
    key: 'openAll',
    value: function openAll() {
      this.selects.forEach(function (select) {
        return select.open();
      });
    }
  }, {
    key: 'closeAll',
    value: function closeAll() {
      this.selects.forEach(function (select) {
        return select.close();
      });
    }
  }, {
    key: 'requestOptions',
    value: function requestOptions() {
      var options = [];
      var option = prompt('Enter option', '');

      while (option && option.length > 0) {
        options.push(option);
        option = prompt('Enter option', '');
      }

      return options;
    }
  }]);

  return SelectManager;
}();

/***/ })

/******/ });