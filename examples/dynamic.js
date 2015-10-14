import QueueAnim from 'queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const App = React.createClass({
  getInitialState() {
    this.index = 100;
    return {
      items: [{
        children: '依次进入1',
        key: 1
      }, {
        children: '依次进入2',
        key: 2
      }, {
        children: '依次进入3',
        key: 3
      }, {
        children: '依次进入4',
        key: 4
      }]
    };
  },
  add() {
    let items = this.state.items;
    items.push({
      children: '新节点',
      key: this.index++
    });
    this.setState({ items });
  },
  remove(key) {
    let items = this.state.items;
    let target = items.filter(item => item.key === key);
    let index;
    if (target && target[0]) {
      index = items.indexOf(target[0]);
    }
    if (index >= 0) {
      items.splice(index, 1);
    }
    this.setState({ items });
  },
  removeAll() {
    this.setState({
      items: []
    });
  },
  render() {
    return <div>
      <QueueAnim>
      {this.state.items.map((item) => <div key={item.key}>
        {item.children} <span onClick={this.remove.bind(this, item.key)}>x</span>
      </div>)}
      </QueueAnim>
      <button onClick={this.add}>点击新增</button>
      <button onClick={this.removeAll}>移出所有</button>
    </div>;
  }
});

ReactDom.render(<App />, document.getElementById('__react-content'));
