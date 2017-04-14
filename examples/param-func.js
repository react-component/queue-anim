webpackJsonp([10],{

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
	
	var Page1 = function (_React$Component) {
	  (0, _inherits3.default)(Page1, _React$Component);
	
	  function Page1(props) {
	    (0, _classCallCheck3.default)(this, Page1);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
	
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
	
	  Page1.prototype.render = function render() {
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
	        { interval: 300, animConfig: this.animConfigFunc,
	          duration: this.durationFunc, ease: this.easeFunc,
	          delay: this.delayFunc
	        },
	        this.state.show ? [_react2.default.createElement(
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
	          '\u6539\u53D8type'
	        ), _react2.default.createElement(
	          'div',
	          { key: '4' },
	          '\u4F9D\u6B21\u8FDB\u5165'
	        ), _react2.default.createElement(
	          'div',
	          { key: '5' },
	          '\u4F9D\u6B21\u8FDB\u5165'
	        )] : null
	      )
	    );
	  };
	
	  return Page1;
	}(_react2.default.Component); /* eslint-disable no-console,react/no-multi-comp */
	
	
	_reactDom2.default.render(_react2.default.createElement(Page1, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=param-func.js.map