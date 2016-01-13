webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(224);


/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-console,react/no-multi-comp */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactRouter = __webpack_require__(225);
	
	var _rcQueueAnim = __webpack_require__(2);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(251);
	
	var App = _react2['default'].createClass({
	  displayName: 'App',
	
	  render: function render() {
	    var props = this.props;
	    var key = props.location.pathname;
	
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/' },
	        '首页'
	      ),
	      ' ',
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/page1' },
	        'Page 1'
	      ),
	      ' ',
	      _react2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/page2' },
	        'Page 2'
	      ),
	      _react2['default'].createElement(
	        _rcQueueAnim2['default'],
	        { type: ['right', 'left'], className: 'router-wrap' },
	        _react2['default'].cloneElement(props.children || _react2['default'].createElement(
	          'h1',
	          { key: 'home' },
	          'Home Page'
	        ), { key: key })
	      )
	    );
	  }
	});
	
	var Page3 = _react2['default'].createClass({
	  displayName: 'Page3',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _rcQueueAnim2['default'],
	      null,
	      _react2['default'].createElement(
	        'p',
	        { key: '1' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '2' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '3' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '4' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '5' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '6' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        'Page3'
	      )
	    );
	  }
	});
	
	var Page1 = _react2['default'].createClass({
	  displayName: 'Page1',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _rcQueueAnim2['default'],
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { key: '1' },
	        'Page 1'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '2' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        '依次进场'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '3' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        '依次进场'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '4' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        '依次进场'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '5' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        '依次进场'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '6' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page2' },
	          'A link to page 2 should be active'
	        ),
	        '改变样式'
	      ),
	      _react2['default'].createElement(
	        Page3,
	        { key: '7' },
	        '1'
	      )
	    );
	  }
	});
	
	var Page2 = _react2['default'].createClass({
	  displayName: 'Page2',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      _rcQueueAnim2['default'],
	      null,
	      _react2['default'].createElement(
	        'h1',
	        { key: '1' },
	        'Page 2'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '2' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page1' },
	          'a link to page 1 '
	        ),
	        '我是页面2.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '3' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page1' },
	          'a link to page 1 '
	        ),
	        '我是页面2.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '4' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page1' },
	          'a link to page 1 '
	        ),
	        '我是页面2.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        { key: '5' },
	        _react2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/page1' },
	          'a link to page 1 '
	        ),
	        '我是页面2.'
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  _reactRouter.Router,
	  null,
	  _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: App, ignoreScrollBehavior: true },
	    _react2['default'].createElement(_reactRouter.Route, { path: 'page1', component: Page1 }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'page2', component: Page2 })
	  )
	), document.getElementById('__react-content'));

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Router2 = __webpack_require__(226);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	exports.Router = _Router3['default'];
	
	var _Link2 = __webpack_require__(241);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	exports.Link = _Link3['default'];
	
	var _IndexLink2 = __webpack_require__(242);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	exports.IndexLink = _IndexLink3['default'];
	
	/* components (configuration) */
	
	var _IndexRedirect2 = __webpack_require__(243);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	exports.IndexRedirect = _IndexRedirect3['default'];
	
	var _IndexRoute2 = __webpack_require__(245);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	exports.IndexRoute = _IndexRoute3['default'];
	
	var _Redirect2 = __webpack_require__(244);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	exports.Redirect = _Redirect3['default'];
	
	var _Route2 = __webpack_require__(246);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	exports.Route = _Route3['default'];
	
	/* mixins */
	
	var _History2 = __webpack_require__(247);
	
	var _History3 = _interopRequireDefault(_History2);
	
	exports.History = _History3['default'];
	
	var _Lifecycle2 = __webpack_require__(248);
	
	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);
	
	exports.Lifecycle = _Lifecycle3['default'];
	
	var _RouteContext2 = __webpack_require__(249);
	
	var _RouteContext3 = _interopRequireDefault(_RouteContext2);
	
	exports.RouteContext = _RouteContext3['default'];
	
	/* utils */
	
	var _useRoutes2 = __webpack_require__(233);
	
	var _useRoutes3 = _interopRequireDefault(_useRoutes2);
	
	exports.useRoutes = _useRoutes3['default'];
	
	var _RouteUtils = __webpack_require__(228);
	
	exports.createRoutes = _RouteUtils.createRoutes;
	
	var _RoutingContext2 = __webpack_require__(229);
	
	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);
	
	exports.RoutingContext = _RoutingContext3['default'];
	
	var _PropTypes2 = __webpack_require__(240);
	
	var _PropTypes3 = _interopRequireDefault(_PropTypes2);
	
	exports.PropTypes = _PropTypes3['default'];
	
	var _match2 = __webpack_require__(250);
	
	var _match3 = _interopRequireDefault(_match2);
	
	exports.match = _match3['default'];
	
	var _Router4 = _interopRequireDefault(_Router2);
	
	exports['default'] = _Router4['default'];

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _historyLibCreateHashHistory = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"history/lib/createHashHistory\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _RoutingContext = __webpack_require__(229);
	
	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);
	
	var _useRoutes = __webpack_require__(233);
	
	var _useRoutes2 = _interopRequireDefault(_useRoutes);
	
	var _PropTypes = __webpack_require__(240);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = (function (_Component) {
	  _inherits(Router, _Component);
	
	  function Router(props, context) {
	    _classCallCheck(this, Router);
	
	    _Component.call(this, props, context);
	
	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }
	
	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };
	
	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;
	
	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;
	
	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];
	
	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });
	
	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };
	
	  /* istanbul ignore next: sanity check */
	
	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;
	
	    process.env.NODE_ENV !== 'production' ? _warning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  };
	
	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };
	
	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;
	
	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };
	
	  return Router;
	})(_react.Component);
	
	Router.propTypes = {
	  history: object,
	  children: _PropTypes.routes,
	  routes: _PropTypes.routes, // alias for children
	  RoutingContext: func.isRequired,
	  createElement: func,
	  onError: func,
	  onUpdate: func,
	  parseQueryString: func,
	  stringifyQuery: func
	};
	
	Router.defaultProps = {
	  RoutingContext: _RoutingContext2['default']
	};
	
	exports['default'] = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';
	
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);
	
	      /* istanbul ignore if: error logging */
	      if (error instanceof Error) process.env.NODE_ENV !== 'production' ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _getRouteParams = __webpack_require__(231);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	
	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);
	
	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);
	
	    _Component.apply(this, arguments);
	  }
	
	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;
	
	    return { history: history, location: location };
	  };
	
	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };
	
	  RoutingContext.prototype.render = function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }
	
	        if (typeof components === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2['default'].isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;
	
	    return element;
	  };
	
	  return RoutingContext;
	})(_react.Component);
	
	RoutingContext.propTypes = {
	  history: object.isRequired,
	  createElement: func.isRequired,
	  location: object.isRequired,
	  routes: array.isRequired,
	  params: object.isRequired,
	  components: array.isRequired
	};
	
	RoutingContext.defaultProps = {
	  createElement: _react2['default'].createElement
	};
	
	RoutingContext.childContextTypes = {
	  history: object.isRequired,
	  location: object.isRequired
	};
	
	exports['default'] = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(232);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  var paramNames = _PatternUtils.getParamNames(route.path);
	
	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}
	
	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = {};
	
	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	
	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  var _compilePattern2 = compilePattern(pattern);
	
	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;
	
	  regexpSource += '/*'; // Capture path separators
	
	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';
	
	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));
	
	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);
	
	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }
	
	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);
	
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;
	
	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }
	
	  return null;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern);
	
	  var tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;
	
	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;
	
	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }
	
	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _historyLibActions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"history/lib/Actions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _historyLibUseQueries = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"history/lib/useQueries\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
	
	var _computeChangedRoutes2 = __webpack_require__(234);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(235);
	
	var _isActive2 = __webpack_require__(237);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(238);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(239);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;
	
	    var historyOptions = _objectWithoutProperties(options, ['routes']);
	
	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};
	
	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }
	
	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;
	
	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }
	
	    var partialNextState = undefined;
	
	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }
	
	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);
	
	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;
	
	      _TransitionUtils.runLeaveHooks(leaveRoutes);
	
	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }
	
	    var RouteGuid = 1;
	
	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }
	
	    var RouteHooks = {};
	
	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }
	
	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }
	
	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });
	
	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);
	
	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }
	
	        callback(result);
	      });
	    }
	
	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);
	
	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }
	
	        return message;
	      }
	    }
	
	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;
	
	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];
	
	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	
	        hooks = RouteHooks[routeID] = [hook];
	
	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);
	
	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }
	
	      return function () {
	        var hooks = RouteHooks[routeID];
	
	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });
	
	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];
	
	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }
	
	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }
	
	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }
	
	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}
	
	exports['default'] = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(232);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = _PatternUtils.getParamNames(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });
	
	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();
	
	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(236);
	
	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);
	
	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));
	
	    return hooks;
	  }, []);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	
	  if (!hooks.length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }
	
	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	
	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },

/***/ 236:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	
	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) return;
	
	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(232);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}
	
	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }
	
	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }
	
	  return null;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);
	
	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }
	
	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;
	
	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;
	
	  return queryIsActive(query, location.query);
	}
	
	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(236);
	
	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}
	
	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _AsyncUtils = __webpack_require__(236);
	
	var _PatternUtils = __webpack_require__(232);
	
	var _RouteUtils = __webpack_require__(228);
	
	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}
	
	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });
	
	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);
	
	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();
	
	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}
	
	exports['default'] = matchRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(7);
	
	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});
	
	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});
	
	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);
	
	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	
	var Link = (function (_Component) {
	  _inherits(Link, _Component);
	
	  function Link() {
	    _classCallCheck(this, Link);
	
	    _Component.apply(this, arguments);
	  }
	
	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;
	
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    if (event.defaultPrevented === true) allowTransition = false;
	
	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();
	
	      return;
	    }
	
	    event.preventDefault();
	
	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	
	      if (hash) to += hash;
	
	      this.context.history.pushState(state, to, query);
	    }
	  };
	
	  Link.prototype.render = function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;
	
	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };
	
	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;
	
	    if (history) {
	      props.href = history.createHref(to, query);
	
	      if (hash) props.href += hash;
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2['default'].createElement('a', props);
	  };
	
	  return Link;
	})(_react.Component);
	
	Link.contextTypes = {
	  history: object
	};
	
	Link.propTypes = {
	  to: string.isRequired,
	  query: object,
	  hash: string,
	  state: object,
	  activeStyle: object,
	  activeClassName: string,
	  onlyActiveOnIndex: bool.isRequired,
	  onClick: func
	};
	
	Link.defaultProps = {
	  onlyActiveOnIndex: false,
	  className: '',
	  style: {}
	};
	
	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(241);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	
	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);
	
	  function IndexLink() {
	    _classCallCheck(this, IndexLink);
	
	    _Component.apply(this, arguments);
	  }
	
	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };
	
	  return IndexLink;
	})(_react.Component);
	
	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Redirect = __webpack_require__(244);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _PropTypes = __webpack_require__(240);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	
	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);
	
	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);
	
	    _Component.apply(this, arguments);
	  }
	
	  /* istanbul ignore next: sanity check */
	
	  IndexRedirect.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  return IndexRedirect;
	})(_react.Component);
	
	IndexRedirect.propTypes = {
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};
	
	IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	  }
	};
	
	exports['default'] = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _PatternUtils = __webpack_require__(232);
	
	var _PropTypes = __webpack_require__(240);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	
	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);
	
	  function Redirect() {
	    _classCallCheck(this, Redirect);
	
	    _Component.apply(this, arguments);
	  }
	
	  /* istanbul ignore next: sanity check */
	
	  Redirect.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  return Redirect;
	})(_react.Component);
	
	Redirect.createRouteFromReactElement = function (element) {
	  var route = _RouteUtils.createRouteFromReactElement(element);
	
	  if (route.from) route.path = route.from;
	
	  route.onEnter = function (nextState, replaceState) {
	    var location = nextState.location;
	    var params = nextState.params;
	
	    var pathname = undefined;
	    if (route.to.charAt(0) === '/') {
	      pathname = _PatternUtils.formatPattern(route.to, params);
	    } else if (!route.to) {
	      pathname = location.pathname;
	    } else {
	      var routeIndex = nextState.routes.indexOf(route);
	      var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	      var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	      pathname = _PatternUtils.formatPattern(pattern, params);
	    }
	
	    replaceState(route.state || location.state, pathname, route.query || location.query);
	  };
	
	  return route;
	};
	
	Redirect.getRoutePattern = function (routes, routeIndex) {
	  var parentPattern = '';
	
	  for (var i = routeIndex; i >= 0; i--) {
	    var route = routes[i];
	    var pattern = route.path || '';
	    parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	    if (pattern.indexOf('/') === 0) break;
	  }
	
	  return '/' + parentPattern;
	};
	
	Redirect.propTypes = {
	  path: string,
	  from: string, // Alias for path
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};
	
	exports['default'] = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _warning = __webpack_require__(227);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _PropTypes = __webpack_require__(240);
	
	var func = _react2['default'].PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	
	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);
	
	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);
	
	    _Component.apply(this, arguments);
	  }
	
	  /* istanbul ignore next: sanity check */
	
	  IndexRoute.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  return IndexRoute;
	})(_react.Component);
	
	IndexRoute.propTypes = {
	  path: _PropTypes.falsy,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};
	
	IndexRoute.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	  }
	};
	
	exports['default'] = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _PropTypes = __webpack_require__(240);
	
	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	
	var Route = (function (_Component) {
	  _inherits(Route, _Component);
	
	  function Route() {
	    _classCallCheck(this, Route);
	
	    _Component.apply(this, arguments);
	  }
	
	  /* istanbul ignore next: sanity check */
	
	  Route.prototype.render = function render() {
	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };
	
	  return Route;
	})(_react.Component);
	
	Route.createRouteFromReactElement = _RouteUtils.createRouteFromReactElement;
	
	Route.propTypes = {
	  path: string,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};
	
	exports['default'] = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PropTypes = __webpack_require__(240);
	
	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {
	
	  contextTypes: {
	    history: _PropTypes.history
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }
	
	};
	
	exports['default'] = History;
	module.exports = exports['default'];

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var object = _react2['default'].PropTypes.object;
	
	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {
	
	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },
	
	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },
	
	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;
	
	    var route = this.props.route || this.context.route;
	
	    !route ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;
	
	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	
	};
	
	exports['default'] = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var object = _react2['default'].PropTypes.object;
	
	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {
	
	  propTypes: {
	    route: object.isRequired
	  },
	
	  childContextTypes: {
	    route: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }
	
	};
	
	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(230);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _historyLibCreateMemoryHistory = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"history/lib/createMemoryHistory\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
	
	var _historyLibUseBasename = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"history/lib/useBasename\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);
	
	var _RouteUtils = __webpack_require__(228);
	
	var _useRoutes = __webpack_require__(233);
	
	var _useRoutes2 = _interopRequireDefault(_useRoutes);
	
	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;
	
	  !location ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;
	
	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });
	
	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);
	
	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}
	
	exports['default'] = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 251:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=router.js.map