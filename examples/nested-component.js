import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
const Item = React.createClass({
  render() {
    return (
      <QueueAnim {...this.props} delay={1000}>
        <div key="11">依次进入</div>
        <div key="12">依次进入</div>
        <div key="13">依次进入</div>
      </QueueAnim>
    );
  }
});
ReactDom.render(<QueueAnim interval={200}>
  <div key="1">依次进入</div>
  <div key="2">依次进入</div>
  <div key="3">依次进入</div>
  <Item key='4' />
</QueueAnim>, document.getElementById('__react-content'));
