import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
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
  removeAll() {
    this.setState({
      items: [],
    });
  },
  render() {
    return (
      <div>
        <QueueAnim type={['right', 'left']} interval={[100, 200]} delay={[0, 1000]} duration={[500, 2000]} ease={['easeOutBack', 'easeInOutCirc']} leaveReverse>
        {this.state.items.map((item) => <div key={item.key}>
          {item.children}
        </div>)}
        </QueueAnim>
        <button onClick={this.removeAll}>移出所有</button>
      </div>
    );
  },
});

ReactDom.render(<App />, document.getElementById('__react-content'));
