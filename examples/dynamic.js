webpackJsonp([6],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(357);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(3);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(72);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _rcQueueAnim = __webpack_require__(80);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(99);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(138);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = function (_React$Component) {
	  (0, _inherits3.default)(App, _React$Component);
	
	  function App(props) {
	    (0, _classCallCheck3.default)(this, App);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
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
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.add },
	        '\u70B9\u51FB\u65B0\u589E'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.addTwo },
	        '\u70B9\u51FB\u65B0\u589E\u4E24\u4E2A'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.removeTwo },
	        '\u70B9\u51FB\u79FB\u51FA\u7B2C\u4E8C\u4E2A'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.removeAll },
	        '\u79FB\u51FA\u6240\u6709'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.removeAndAdd },
	        '\u79FB\u51FA\u4E0E\u6DFB\u52A0'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.removeAndAddTow },
	        '\u5934\u5C3E\u6DFB\u52A0\u4E0E\u79FB\u51FA\u4E24\u4E2A'
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { type: this.state.type },
	        this.state.items.map(function (item) {
	          return _react2.default.createElement(
	            'div',
	            { key: item.key },
	            item.children,
	            ' ',
	            _react2.default.createElement(
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
	}(_react2.default.Component); /* eslint-disable no-console,react/no-multi-comp */
	
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=dynamic.js.map