/* eslint-disable no-console,react/no-multi-comp */
import { Router, Route, Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
import '../assets/router.less';

const App = React.createClass({
  render() {
    const props = this.props;
    const key = props.location.pathname;

    return (
      <div>
        <Link to="/">首页</Link>
      &nbsp;
        <Link to="/page1">Page 1</Link>
      &nbsp;
        <Link to="/page2">Page 2</Link>
        <QueueAnim type={['right', 'left']} className="router-wrap">
          {React.cloneElement(props.children || <h1 key="home">Home Page</h1>, {key: key})}
        </QueueAnim>
      </div>
    );
  },
});

const Page3 = React.createClass({
  render() {
    return (
      <QueueAnim>
        <p key="1">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
        <p key="2">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
        <p key="3">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
        <p key="4">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
        <p key="5">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
        <p key="6">
          <Link to="/page2">A link to page 2 should be active</Link>
          Page3
        </p>
      </QueueAnim>
    );
  },
});

const Page1 = React.createClass({
  render() {
    return (
      <QueueAnim>
        <h1 key="1">Page 1</h1>
        <p key="2">
          <Link to="/page2">A link to page 2 should be active</Link>
          依次进场</p>
        <p key="3">
          <Link to="/page2">A link to page 2 should be active</Link>
          依次进场</p>
        <p key="4">
          <Link to="/page2">A link to page 2 should be active</Link>
          依次进场</p>
        <p key="5">
          <Link to="/page2">A link to page 2 should be active</Link>
          依次进场</p>
        <p key="6">
          <Link to="/page2">A link to page 2 should be active</Link>
          改变样式</p>
        <Page3 key="7">1</Page3>
      </QueueAnim>
    );
  },
});

const Page2 = React.createClass({
  render() {
    return (
      <QueueAnim>
        <h1 key="1">Page 2</h1>
        <p key="2">
          <Link to="/page1">a link to page 1 </Link>
          我是页面2.
        </p>
        <p key="3">
          <Link to="/page1">a link to page 1 </Link>
          我是页面2.
        </p>
        <p key="4">
          <Link to="/page1">a link to page 1 </Link>
          我是页面2.
        </p>
        <p key="5">
          <Link to="/page1">a link to page 1 </Link>
          我是页面2.
        </p>
      </QueueAnim>
    );
  },
});

ReactDom.render((
  <Router>
    <Route path="/" component={App} ignoreScrollBehavior>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('__react-content'));
