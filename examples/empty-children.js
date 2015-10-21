import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const Item = React.createClass({
  render() {
    return (
      <div>Item</div>
    );
  }
});

const Page1 = React.createClass({
  render() {
    return (
      <QueueAnim interval={300}>
        <Item key='1' />
        <Item key='2' />
        <Item key='3' />
        <Item key='4' />
      </QueueAnim>
    );
  }
});

ReactDom.render(<Page1 />, document.getElementById('__react-content'));
