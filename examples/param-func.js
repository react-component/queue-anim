webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237);


/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Page1 = _react2.default.createClass({
	  displayName: 'Page1',
	  getInitialState: function getInitialState() {
	    return {
	      show: true
	    };
	  },
	  onClick: function onClick() {
	    this.setState({
	      show: !this.state.show
	    });
	  },
	  animConfigFunc: function animConfigFunc(e) {
	    if (e.key === '3') {
	      return { opacity: [1, 0], translateX: [0, 30] };
	    }
	    return [{ opacity: [1, 0], translateX: [0, -30] }, { opacity: [1, 0], translateX: [0, 30] }];
	  },
	  durationFunc: function durationFunc(e) {
	    if (e.key === '3') {
	      return [1500, 4000];
	    }
	    return 500;
	  },
	  easeFunc: function easeFunc(e) {
	    if (e.key === '3') {
	      return ['easeOutBack', 'easeInBack'];
	    }
	    return 'easeInOutQuart';
	  },
	  delayFunc: function delayFunc(e) {
	    if (e.index >= 3) {
	      return [1500, 0];
	    }
	    return 0;
	  },
	  render: function render() {
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
	  }
	}); /* eslint-disable no-console,react/no-multi-comp */
	
	
	_reactDom2.default.render(_react2.default.createElement(Page1, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=param-func.js.map