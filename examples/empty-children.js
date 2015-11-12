import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const Item = React.createClass({
  render() {
    return (
      <QueueAnim>
        <div key='1'>Item</div>
        <div key='2'>Item</div>
        <div key='3'>Item</div>
      </QueueAnim>
    );
  }
});

const Page1 = React.createClass({
  render() {
    return (
      <QueueAnim interval={3000}>
        <Item key='1' />
        <Item key='2' />
        <Item key='3' />
        <Item key='4' />
      </QueueAnim>
    );
  }
});

ReactDom.render(<Page1 />, document.getElementById('__react-content'));
