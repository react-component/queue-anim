/* eslint-disable no-console,react/no-multi-comp */
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import React from 'react';

import './assets/router.less';

function Home() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

const Page3 = React.forwardRef((props, ref) => {
  return (
    <QueueAnim ref={ref}>
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
});

const Page1 = React.forwardRef((props, ref) => {
  return (
    <QueueAnim ref={ref}>
      <h1 key="1">Page 1</h1>
      <p key="2">
        <Link to="/page2">A link to page 2 should be active</Link>
        依次进场
      </p>
      <p key="3">
        <Link to="/page2">A link to page 2 should be active</Link>
        依次进场
      </p>
      <p key="4">
        <Link to="/page2">A link to page 2 should be active</Link>
        依次进场
      </p>
      <p key="5">
        <Link to="/page2">A link to page 2 should be active</Link>
        依次进场
      </p>
      <p key="6">
        <Link to="/page2">A link to page 2 should be active</Link>
        改变样式
      </p>
      <Page3 key="page3" />
    </QueueAnim>
  );
});

const Page2 = React.forwardRef((props, ref) => {
  return (
    <QueueAnim ref={ref}>
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
});

export default class App extends React.Component {
  getChildren = (props: any) => {
    const { location } = props;
    const compArray = [
      { to: '/home', component: Home, name: '首页' },
      { to: '/page1', component: Page1, name: 'Page1' },
      { to: '/page2', component: Page2, name: 'Page2' },
    ];
    const component = compArray
      .map((item) => {
        if (location.pathname === item.to) {
          return item.component;
        }
        return null;
      })
      .filter((item) => item)[0];
    const homeRoute = () => <Redirect to="/home" />;
    return (
      <div className="router-wrapper">
        <Route exact path="/" render={homeRoute} />
        {compArray.map((item) => (
          <Link key={item.to} to={item.to} replace>
            {item.name}&nbsp;
          </Link>
        ))}
        <QueueAnim className="router-wrap" type="alpha">
          <Route location={location} key={location.pathname} path="/:url" component={component as any} />
        </QueueAnim>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Route render={this.getChildren} />
      </Router>
    );
  }
}
