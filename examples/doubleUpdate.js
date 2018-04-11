webpackJsonp([15],{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);


/***/ }),

/***/ 248:
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

    _this['switch'] = function () {
      _this.setState({
        items: _this.state.items.length ? [] : _this.items
      });
    };

    _this.remove = function () {
      console.log('remove: 1');
      _this.setState({ items: [] }, function () {
        console.log('remove: 2');
        _this.setState({ items: [] }, function () {
          console.log('remove: 3');
          _this.setState({ items: [] });
        });
      });
    };

    _this.exchange = function () {
      console.log('exchange: 1');
      _this.setState({
        items: [{
          children: '依次进入1',
          key: 1
        }, {
          children: '依次进入2',
          key: 2
        }]
      }, function () {
        console.log('exchange: 2');
        _this.setState({
          items: [{
            children: '依次进入1',
            key: 1
          }, {
            children: '依次进入2',
            key: 2
          }]
        }, function () {
          console.log('exchange: 3');
          _this.setState({
            items: [{
              children: '依次进入1',
              key: 1
            }, {
              children: '依次进入2',
              key: 2
            }]
          });
        });
      });
    };

    _this.index = 100;
    _this.items = [{
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
    }];
    _this.state = {
      items: _this.items,
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
        { onClick: this['switch'] },
        '\u5207\u6362'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.remove },
        '\u591A\u6B21\u5237\u7A7A\u5B50\u7EA7'
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'button',
        { onClick: this.exchange },
        '\u591A\u6B21\u5207\u6362\u540C\u6837\u5B50\u7EA7'
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

},[247]);
//# sourceMappingURL=doubleUpdate.js.map