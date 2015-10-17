webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(166);


/***/ },

/***/ 166:
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
	    var index = undefined;
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
	    //console.log(Math.round(Math.random() * items.length), items.length)
	    items.splice(items.length - 1, 1);
	    items.push({
	      children: '新节点' + Date.now(),
	      key: this.index++
	    });
	    this.setState({ items: items });
	  },
	  render: function render() {
	    var _this = this;
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.add },
	        '点击新增'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.addTwo },
	        '点击新增两个'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.removeAll },
	        '移出所有'
	      ),
	      _react2['default'].createElement(
	        'button',
	        { onClick: this.removeAndAdd },
	        '移出与添加'
	      ),
	      _react2['default'].createElement(
	        _rcQueueAnim2['default'],
	        null,
	        this.state.items.map(function (item) {
	          return _react2['default'].createElement(
	            'div',
	            { key: item.key },
	            item.children,
	            ' ',
	            _react2['default'].createElement(
	              'a',
	              { href: '#', onClick: _this.remove.bind(_this, item.key) },
	              '删除'
	            )
	          );
	        })
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=dynamic.js.map