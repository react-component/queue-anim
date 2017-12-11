webpackJsonp([6],{

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(297);


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);



/* eslint-disable no-console,react/no-multi-comp */



var children = [__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  { key: '1' },
  '\u4F9D\u6B21\u8FDB\u5165'
), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  { key: '2' },
  '\u4F9D\u6B21\u8FDB\u5165'
), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  { key: '3' },
  '\u4F9D\u6B21\u8FDB\u5165'
), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  { key: '4' },
  '\u4F9D\u6B21\u8FDB\u5165'
)];

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onClick = function () {
      if (_this.state.children) {
        _this.setState({ children: null });
      } else {
        _this.setState({ children: children });
      }
    };

    _this.state = {
      children: children
    };
    return _this;
  }

  Demo.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.onClick },
        '\u5207\u6362'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */],
        {
          animConfig: [[{ x: [300, 20], opacity: [1, 0] }, { y: [100, 0] }], [{ x: [300, 500] }, { y: [100, -50], opacity: [1, 0] }]],
          ease: 'easeInOutQuart'
        },
        this.state.children
      )
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[296]);
//# sourceMappingURL=timeline.js.map