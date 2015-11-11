import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';


const Page1 = React.createClass({
  getInitialState() {
    this.index = 100;
    return {
      show: true
    };
  },
  onClick() {
    this.setState({
      show: !this.state.show
    })
  },
  typeFunc(key) {
    if (key === '3') {
      return {opacity: [1, 0], translateX: [0, 30]};
    }
    return {opacity: [1, 0], translateX: [0, -30]};
  },
  durationFunc(key) {
    if (key === '3') {
      return [1500, 600];
    }
    return 500;
  },
  easeFunc(key) {
    if (key === '3') {
      return ['easeOutBack', 'easeInBack'];
    }
    return 'easeInOutQuart';
  },
  delayFunc(key, index) {
    if (index >= 3) {
      return [1500, 0];
    }
    return 0;
  },
  render() {
    return (<div>
      <button onClick={this.onClick}>切换</button>
      <QueueAnim interval={300} animConfig={this.typeFunc} duration={this.durationFunc} ease={this.easeFunc} delay={this.delayFunc}>
      {this.state.show ? [<div key="1">依次进入</div>,
        <div key="2">依次进入</div>,
        <div key="3">改变type</div>,
        <div key="4">依次进入</div>,
        <div key="5">依次进入</div>] : null}
      </QueueAnim>
    </div>
    );
  }
});

ReactDom.render(<Page1 />, document.getElementById('__react-content'));
