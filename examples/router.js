/* eslint-disable no-console,react/no-multi-comp */
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
import '../assets/router.less';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
      </div>
    );
  }
}

class Page3 extends React.Component {
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
  }
}

class Page1 extends React.Component {
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
  }
}

class Page2 extends React.Component {
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
  }
}


class App extends React.Component {

  getChildren = (props) => {
    const { location } = { ...props };
    const compArray = [
      { to: '/home', component: Home, name: '首页' },
      { to: '/page1', component: Page1, name: 'Page1' },
      { to: '/page2', component: Page2, name: 'Page2' },
    ];
    const component = compArray.map(item => {
      if (location.pathname === item.to) {
        return item.component;
      }
    }).filter(item => item)[0];
    const homeRoute = () => (
      <Redirect to="/home" />
    );
    return (
      <div>
        <Route exact path="/" render={homeRoute} />
        {compArray.map(item => (<Link key={item.to} to={item.to} replace>{item.name}&nbsp;</Link>))}
        <QueueAnim type={['right', 'left']} className="router-wrap">
          <Route
            location={location}
            key={location.pathname}
            path="/:url"
            component={component}
          />
        </QueueAnim>
      </div>
    );
  }

  render() {
    return (<Router>
      <Route render={this.getChildren} />
    </Router>);
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
