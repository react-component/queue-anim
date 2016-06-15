/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

const App = React.createClass({
  getInitialState() {
    this.index = 100;
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
      }],
    };
  },
  add() {
    const items = this.state.items;
    items.push({
      children: '新节点',
      key: this.index++,
    });
    this.setState({ items });
  },
  addTwo() {
    const items = this.state.items;
    items.push({
      children: '新节点',
      key: this.index++,
    });
    items.push({
      children: '新节点',
      key: this.index++,
    });
    this.setState({ items });
  },
  remove(key, e) {
    e.preventDefault();
    const items = this.state.items;
    const target = items.filter(item => item.key === key);
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
      items: [],
    });
  },
  removeAndAdd() {
    const items = this.state.items;
    items.splice(items.length - 1, 1);
    items.push({
      children: `新节点${Date.now()}`,
      key: this.index++,
    });
    this.setState({ items });
  },
  render() {
    return (
      <div>
        <button onClick={this.add}>点击新增</button>
        <button onClick={this.addTwo}>点击新增两个</button>
        <button onClick={this.removeAll}>移出所有</button>
        <button onClick={this.removeAndAdd}>移出与添加</button>
        <QueueAnim>
          {this.state.items.map((item) => <div key={item.key}>
            {item.children} <a href="#" onClick={this.remove.bind(this, item.key)}>删除</a>
          </div>)}
        </QueueAnim>
      </div>
    );
  },
});

ReactDom.render(<App />, document.getElementById('__react-content'));
