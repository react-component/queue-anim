webpackJsonp([9],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom__);




/* eslint-disable no-console,react/no-multi-comp */




var Page1 = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Page1, _React$Component);

  function Page1(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Page1);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Page1.__proto__ || Object.getPrototypeOf(Page1)).call(this, props));

    _this.onClick = function () {
      _this.setState({
        show: !_this.state.show
      });
    };

    _this.animConfigFunc = function (e) {
      if (e.key === '3') {
        return { opacity: [1, 0], translateX: [0, 30] };
      }
      return [{ opacity: [1, 0], translateX: [0, -30] }, { opacity: [1, 0], translateX: [0, 30] }];
    };

    _this.durationFunc = function (e) {
      if (e.key === '3') {
        return [1500, 4000];
      }
      return 500;
    };

    _this.easeFunc = function (e) {
      if (e.key === '3') {
        return ['easeOutBack', 'easeInBack'];
      }
      return 'easeInOutQuart';
    };

    _this.delayFunc = function (e) {
      if (e.index >= 3) {
        return [1500, 0];
      }
      return 0;
    };

    _this.state = {
      show: true
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Page1, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'button',
          { onClick: this.onClick },
          '\u5207\u6362'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
          { interval: 300, animConfig: this.animConfigFunc,
            duration: this.durationFunc, ease: this.easeFunc,
            delay: this.delayFunc
          },
          this.state.show ? [__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '1' },
            '\u4F9D\u6B21\u8FDB\u5165'
          ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '2' },
            '\u4F9D\u6B21\u8FDB\u5165'
          ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '3' },
            '\u6539\u53D8type'
          ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '4' },
            '\u4F9D\u6B21\u8FDB\u5165'
          ), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { key: '5' },
            '\u4F9D\u6B21\u8FDB\u5165'
          )] : null
        )
      );
    }
  }]);

  return Page1;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_6_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Page1, null), document.getElementById('__react-content'));

/***/ })

},[276]);
//# sourceMappingURL=param-func.js.map