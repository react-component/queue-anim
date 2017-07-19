/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
const children = [<div key="1">依次进入</div>,
  <div key="2">依次进入</div>,
  <div key="3">依次进入</div>,
  <div key="4">依次进入</div>,
];
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children,
    };
  }

  onClick = () => {
    if (this.state.children) {
      this.setState({ children: null });
    } else {
      this.setState({ children });
    }
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>切换</button>
      <QueueAnim
        animConfig={[
          [{ x: [300, 20], opacity: [1, 0] }, { y: [100, 0] }],
          [{ x: [300, 500] }, { y: [100, -50], opacity: [1, 0] }],
        ]}
        ease="easeInOutQuart"
      >
        {this.state.children}
      </QueueAnim>
    </div>);
  }
}
ReactDom.render(<Demo />, document.getElementById('__react-content'));
