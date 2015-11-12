webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(211);


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Item = _react2['default'].createClass({
	  displayName: 'Item',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      'Item'
	    );
	  }
	});
	
	var Page1 = _react2['default'].createClass({
	  displayName: 'Page1',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _rcQueueAnim2['default'],
	      { interval: 300 },
	      _react2['default'].createElement(Item, { key: '1' }),
	      _react2['default'].createElement(Item, { key: '2' }),
	      _react2['default'].createElement(Item, { key: '3' }),
	      _react2['default'].createElement(Item, { key: '4' })
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Page1, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=empty-children.js.map