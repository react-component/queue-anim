webpackJsonp([13],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_queue_anim__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* eslint-disable no-console,react/no-multi-comp */




function QueueItem() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_rc_queue_anim__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { key: '1' },
      'Item'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { key: '2' },
      'Item'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { key: '3' },
      'Item'
    )
  );
}

function Item() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    null,
    'Item'
  );
}

function Page1() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_rc_queue_anim__["a" /* default */],
      { interval: 1500 },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, { key: '1' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, { key: '2' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, { key: '3' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, { key: '4' })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_0_rc_queue_anim__["a" /* default */],
      { interval: 1500 },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        QueueItem,
        { key: '1' },
        '11'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        QueueItem,
        { key: '2' },
        '11'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        QueueItem,
        { key: '3' },
        '11'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        QueueItem,
        { key: '4' },
        '11'
      )
    )
  );
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page1, null), document.getElementById('__react-content'));

/***/ })

},[276]);
//# sourceMappingURL=empty-children.js.map