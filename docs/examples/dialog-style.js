/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  onClick = () => {
    this.setState({
      show: true,
    });
  }
  onClose = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    let dialog;
    if (this.state.show) {
      dialog = (
        <Dialog visible={this.state.show}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={{ width: 600 }}
          title={<div> 第二个弹框</div>}
        >
          <QueueAnim>
            <div key="1">依次进入</div>
            <div key="2">依次进入</div>
            <div key="3">依次进入</div>
            <div key="4">依次进入</div>
          </QueueAnim>
        </Dialog>
      );
    }
    return (
      <div>
        <QueueAnim type={['right', 'left']} interval={[100, 200]}
          delay={[0, 1000]} duration={[500, 2000]}
          ease={['easeOutBack', 'easeInOutCirc']} leaveReverse
        >
          <div key="1">依次进入</div>
          <div key="2">依次进入</div>
          <div key="3">依次进入</div>
          <div key="4">依次进入</div>
          {dialog}
        </QueueAnim>
        <button onClick={this.onClick}>弹出框口</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
