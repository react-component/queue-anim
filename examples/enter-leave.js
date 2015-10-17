webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(167);


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(161);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var App = _react2['default'].createClass({
	  displayName: 'App',
	
	  getInitialState: function getInitialState() {
	    return {
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
	  removeAll: function removeAll() {
	    this.setState({
	      items: []
	    });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _rcQueueAnim2['default'],
	        { type: ['right', 'left'], interval: [100, 200], delay: [0, 1000], duration: [500, 2000], ease: ['easeOutBack', 'easeInOutCirc'] },
	        this.state.items.map(function (item) {
	          return _react2['default'].createElement(
	            'div',
	            { key: item.key },
	            item.children
	          );
	        })
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.removeAll },
	        '移出所有'
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=enter-leave.js.map