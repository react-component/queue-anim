import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
      show: true,
      items: [{
        children: '依次进入1',
        key: 1,
      }, {
        children: '依次进入2',
        key: 2,
      }, {
        children: '依次进入3',
        key: 3,
      }, {
        children: '依次进入4',
        key: 4,
      }, {
        children: '依次进入5',
        key: 5,
      }, {
        children: '依次进入6',
        key: 6,
      }],
    };
  },
  toggle() {
    this.setState({
      show: !this.state.show,
    });
  },
  render() {
    return (
      <div>
        <button onClick={this.toggle}>切换</button><span>{this.state.show ? '显示' : '隐藏'}</span>
        <QueueAnim leaveReverse>
        {this.state.show ? this.state.items.map((item) => <div key={item.key}>
          {item.children}
        </div>) : null}
        </QueueAnim>
      </div>
    );
  },
});

ReactDom.render(<App />, document.getElementById('__react-content'));
