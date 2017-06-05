webpackJsonp([7],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(354);


/***/ }),

/***/ 354:
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
	
	var QueueItem = function (_React$Component) {
	  (0, _inherits3.default)(QueueItem, _React$Component);
	
	  function QueueItem() {
	    (0, _classCallCheck3.default)(this, QueueItem);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	  }
	
	  QueueItem.prototype.render = function render() {
	    return _react2.default.createElement(
	      _rcQueueAnim2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { key: '1' },
	        'Item'
	      ),
	      _react2.default.createElement(
	        'div',
	        { key: '2' },
	        'Item'
	      ),
	      _react2.default.createElement(
	        'div',
	        { key: '3' },
	        'Item'
	      )
	    );
	  };
	
	  return QueueItem;
	}(_react2.default.Component); /* eslint-disable no-console,react/no-multi-comp */
	
	
	var Item = function (_React$Component2) {
	  (0, _inherits3.default)(Item, _React$Component2);
	
	  function Item() {
	    (0, _classCallCheck3.default)(this, Item);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component2.apply(this, arguments));
	  }
	
	  Item.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'Item'
	    );
	  };
	
	  return Item;
	}(_react2.default.Component);
	
	var Page1 = function (_React$Component3) {
	  (0, _inherits3.default)(Page1, _React$Component3);
	
	  function Page1() {
	    (0, _classCallCheck3.default)(this, Page1);
	    return (0, _possibleConstructorReturn3.default)(this, _React$Component3.apply(this, arguments));
	  }
	
	  Page1.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { interval: 1500 },
	        _react2.default.createElement(Item, { key: '1' }),
	        _react2.default.createElement(Item, { key: '2' }),
	        _react2.default.createElement(Item, { key: '3' }),
	        _react2.default.createElement(Item, { key: '4' })
	      ),
	      _react2.default.createElement('hr', null),
	      _react2.default.createElement(
	        _rcQueueAnim2.default,
	        { interval: 1500 },
	        _react2.default.createElement(
	          QueueItem,
	          { key: '1' },
	          '11'
	        ),
	        _react2.default.createElement(
	          QueueItem,
	          { key: '2' },
	          '11'
	        ),
	        _react2.default.createElement(
	          QueueItem,
	          { key: '3' },
	          '11'
	        ),
	        _react2.default.createElement(
	          QueueItem,
	          { key: '4' },
	          '11'
	        )
	      )
	    );
	  };
	
	  return Page1;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Page1, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=empty-children.js.map