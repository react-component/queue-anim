webpackJsonp([10],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(401);


/***/ }),

/***/ 401:
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
	
	    _this.toggle = function () {
	      _this.setState({
	        show: !_this.state.show
	      });
	    };
	
	    _this.state = {
	      show: true,
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
	      }]
	    };
	    return _this;
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.toggle },
	        '\u5207\u6362'
	      ),
	      _react2.default.createElement(
	        'span',
	        null,
	        this.state.show ? '显示' : '隐藏'
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { leaveReverse: true },
	        this.state.show ? this.state.items.map(function (item) {
	          return _react2.default.createElement(
	            'div',
	            { key: item.key },
	            item.children
	          );
	        }) : null
	      )
	    );
	  };
	
	  return App;
	}(_react2.default.Component); /* eslint-disable no-console,react/no-multi-comp */
	
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=monkey-click.js.map