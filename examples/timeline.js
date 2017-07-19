webpackJsonp([17],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(408);


/***/ }),

/***/ 408:
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
	
	var children = [_react2.default.createElement(
	  'div',
	  { key: '1' },
	  '\u4F9D\u6B21\u8FDB\u5165'
	), _react2.default.createElement(
	  'div',
	  { key: '2' },
	  '\u4F9D\u6B21\u8FDB\u5165'
	), _react2.default.createElement(
	  'div',
	  { key: '3' },
	  '\u4F9D\u6B21\u8FDB\u5165'
	), _react2.default.createElement(
	  'div',
	  { key: '4' },
	  '\u4F9D\u6B21\u8FDB\u5165'
	)]; /* eslint-disable no-console,react/no-multi-comp */
	
	var Demo = function (_React$Component) {
	  (0, _inherits3.default)(Demo, _React$Component);
	
	  function Demo(props) {
	    (0, _classCallCheck3.default)(this, Demo);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
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
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onClick },
	        '\u5207\u6362'
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        {
	          animConfig: [[{ x: [300, 20], opacity: [1, 0] }, { y: [100, 0] }], [{ x: [300, 500] }, { y: [100, -50], opacity: [1, 0] }]],
	          ease: 'easeInOutQuart'
	        },
	        this.state.children
	      )
	    );
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=timeline.js.map