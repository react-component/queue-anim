webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(221);


/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-console,react/no-multi-comp */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var App = _react2['default'].createClass({
	  displayName: 'App',
	
	  getInitialState: function getInitialState() {
	    return {
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
	  },
	  toggle: function toggle() {
	    this.setState({
	      show: !this.state.show
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.toggle },
	        '切换'
	      ),
	      _react2['default'].createElement(
	        'span',
	        null,
	        this.state.show ? '显示' : '隐藏'
	      ),
	      _react2['default'].createElement(
	        _rcQueueAnim2['default'],
	        { leaveReverse: true },
	        this.state.show ? this.state.items.map(function (item) {
	          return _react2['default'].createElement(
	            'div',
	            { key: item.key },
	            item.children
	          );
	        }) : null
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=monkey-click.js.map