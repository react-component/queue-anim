webpackJsonp([14],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(400);


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

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
	
	__webpack_require__(401);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable no-console,react/no-multi-comp */
	var Demo = function (_React$Component) {
	  (0, _inherits3.default)(Demo, _React$Component);
	
	  function Demo() {
	    (0, _classCallCheck3.default)(this, Demo);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	
	    _this.onEnter = function () {
	      _this.setState({
	        childrenKey: null
	      });
	    };
	
	    _this.onLeave = function () {
	      _this.setState({
	        childrenKey: _this.childrenKey
	      });
	    };
	
	    _this.getChildren = function () {
	      return (_this.state.childrenKey || []).map(function (item) {
	        return _react2.default.createElement('li', { key: item.key });
	      });
	    };
	
	    _this.childrenKey = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }];
	    _this.state = {
	      childrenKey: _this.childrenKey
	    };
	    return _this;
	  }
	
	  Demo.prototype.render = function render() {
	    var childrenToRender = this.getChildren();
	    return _react2.default.createElement(
	      'div',
	      { className: 'switch', onMouseEnter: this.onEnter, onMouseLeave: this.onLeave },
	      _react2.default.createElement(
	        'h2',
	        null,
	        '\u9F20\u6807\u7ECF\u8FC7\u5F53\u524D\u533A\u57DF\uFF0C\u518D\u79FB\u51FA\u533A\u57DF\u67E5\u770B'
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { component: 'ul', leaveReverse: true, delay: [0, 300], type: 'scale' },
	        childrenToRender
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { component: 'ul', leaveReverse: true, delay: 150, type: 'scale' },
	        childrenToRender
	      ),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { component: 'ul', leaveReverse: true, delay: [300, 0], type: 'scale' },
	        childrenToRender
	      )
	    );
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ },

/***/ 401:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=switch.js.map