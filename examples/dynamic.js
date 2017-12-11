webpackJsonp([14],{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ }),

/***/ 247:
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




var App = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(App, _React$Component);

  function App(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, App);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.add = function () {
      var items = _this.state.items;
      items.push({
        children: '新节点',
        key: _this.index++
      });
      _this.setState({ items: items });
    };

    _this.addTwo = function () {
      var items = _this.state.items;
      items.push({
        children: '新节点',
        key: _this.index++
      });
      items.push({
        children: '新节点',
        key: _this.index++
      });
      _this.setState({ items: items });
    };

    _this.remove = function (key, e) {
      e.preventDefault();
      var items = _this.state.items;
      var target = items.filter(function (item) {
        return item.key === key;
      });
      var index = void 0;
      if (target && target[0]) {
        index = items.indexOf(target[0]);
      }
      if (index >= 0) {
        items.splice(index, 1);
      }
      _this.setState({ items: items });
    };

    _this.removeAll = function () {
      _this.setState({
        items: []
      });
    };

    _this.removeAndAdd = function () {
      var items = _this.state.items;
      items.splice(items.length - 1, 1);
      items.push({
        children: '\u65B0\u8282\u70B9' + Date.now(),
        key: _this.index++
      });
      _this.setState({ items: items });
    };

    _this.removeAndAddTow = function () {
      var items = _this.state.items;
      items.splice(items.length - 1, 1);
      items.splice(items.length - 2, 1);
      items.push({
        children: '\u65B0\u8282\u70B9' + Date.now(),
        key: _this.index++
      });
      items.unshift({
        children: '\u65B0\u8282\u70B9' + Date.now() + '-top',
        key: _this.index++
      });
      _this.setState({ items: items });
    };

    _this.removeTwo = function () {
      var items = _this.state.items;
      items.splice(1, 1);
      _this.setState({ items: items });
    };

    _this.index = 100;
    _this.state = {
      items: [{
        children: '依次进入1',
        key: 1
      }, {
        children: '依次进入2',
        key: 2
      }, {
        children: '依次进入3',
        key: 3
      }, {
        children: '依次进入4',
        key: 4
      }, {
        children: '依次进入5',
        key: 5
      }, {
        children: '依次进入6',
        key: 6
      }],
      type: 'left'
    };
    return _this;
  }

  App.prototype.render = function render() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.add },
        '\u70B9\u51FB\u65B0\u589E'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.addTwo },
        '\u70B9\u51FB\u65B0\u589E\u4E24\u4E2A'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.removeTwo },
        '\u70B9\u51FB\u79FB\u51FA\u7B2C\u4E8C\u4E2A'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.removeAll },
        '\u79FB\u51FA\u6240\u6709'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.removeAndAdd },
        '\u79FB\u51FA\u4E0E\u6DFB\u52A0'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.removeAndAddTow },
        '\u5934\u5C3E\u6DFB\u52A0\u4E0E\u79FB\u51FA\u4E24\u4E2A'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_rc_queue_anim__["a" /* default */],
        { type: this.state.type },
        this.state.items.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'div',
            { key: item.key },
            item.children,
            ' ',
            __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
              'a',
              { href: '#', onClick: _this2.remove.bind(_this2, item.key) },
              '\u5220\u9664'
            )
          );
        })
      )
    );
  };

  return App;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ })

},[246]);
//# sourceMappingURL=dynamic.js.map