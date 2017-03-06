webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(318);


/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(92);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(123);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    this.index = 100;
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
	  add: function add() {
	    var items = this.state.items;
	    items.push({
	      children: '新节点',
	      key: this.index++
	    });
	    this.setState({ items: items });
	  },
	  addTwo: function addTwo() {
	    var items = this.state.items;
	    items.push({
	      children: '新节点',
	      key: this.index++
	    });
	    items.push({
	      children: '新节点',
	      key: this.index++
	    });
	    this.setState({ items: items });
	  },
	  remove: function remove(key, e) {
	    e.preventDefault();
	    var items = this.state.items;
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
	    this.setState({ items: items });
	  },
	  removeAll: function removeAll() {
	    this.setState({
	      items: []
	    });
	  },
	  removeAndAdd: function removeAndAdd() {
	    var items = this.state.items;
	    items.splice(items.length - 1, 1);
	    items.push({
	      children: '\u65B0\u8282\u70B9' + Date.now(),
	      key: this.index++
	    });
	    this.setState({ items: items });
	  },
	  removeAndAddTow: function removeAndAddTow() {
	    var items = this.state.items;
	    items.splice(items.length - 1, 1);
	    items.splice(items.length - 2, 1);
	    items.push({
	      children: '\u65B0\u8282\u70B9' + Date.now(),
	      key: this.index++
	    });
	    items.unshift({
	      children: '\u65B0\u8282\u70B9' + Date.now() + '-top',
	      key: this.index++
	    });
	    this.setState({ items: items });
	  },
	  removeTwo: function removeTwo() {
	    var items = this.state.items;
	    items.splice(1, 1);
	    this.setState({ items: items });
	  },
	  render: function render() {
	    var _this = this;
	
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
	        null,
	        this.state.items.map(function (item) {
	          return _react2.default.createElement(
	            'div',
	            { key: item.key },
	            item.children,
	            ' ',
	            _react2.default.createElement(
	              'a',
	              { href: '#', onClick: _this.remove.bind(_this, item.key) },
	              '\u5220\u9664'
	            )
	          );
	        })
	      )
	    );
	  }
	}); /* eslint-disable no-console,react/no-multi-comp */
	
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=dynamic.js.map