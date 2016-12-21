webpackJsonp([14],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285);


/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(286);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint-disable no-console,react/no-multi-comp */
	
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	
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
	        '鼠标经过当前区域，再移出区域查看'
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

/***/ 286:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=switch.js.map