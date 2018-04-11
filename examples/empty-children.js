webpackJsonp([13],{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(252);


/***/ }),

/***/ 252:
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




var QueueItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(QueueItem, _React$Component);

  function QueueItem() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, QueueItem);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  QueueItem.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { key: '1' },
        'Item'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { key: '2' },
        'Item'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { key: '3' },
        'Item'
      )
    );
  };

  return QueueItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var Item = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Item, _React$Component2);

  function Item() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Item);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component2.apply(this, arguments));
  }

  Item.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      'Item'
    );
  };

  return Item;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var Page1 = function (_React$Component3) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Page1, _React$Component3);

  function Page1() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Page1);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component3.apply(this, arguments));
  }

  Page1.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */],
        { interval: 1500 },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Item, { key: '1' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Item, { key: '2' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Item, { key: '3' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Item, { key: '4' })
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('hr', null),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */],
        { interval: 1500 },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          QueueItem,
          { key: '1' },
          '11'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          QueueItem,
          { key: '2' },
          '11'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          QueueItem,
          { key: '3' },
          '11'
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          QueueItem,
          { key: '4' },
          '11'
        )
      )
    );
  };

  return Page1;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Page1, null), document.getElementById('__react-content'));

/***/ })

},[251]);
//# sourceMappingURL=empty-children.js.map