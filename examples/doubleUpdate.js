/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.index = 100;
    this.items = [
      {
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
      },
    ];
    this.state = {
      items: this.items,
      type: 'left',
    };
  }

  switch = () => {
    this.setState({
      items: this.state.items.length ? [] : this.items,
    });
  }
  remove = () => {
    console.log('remove: 1');
    this.setState({ items: [] }, () => {
      console.log('remove: 2');
      this.setState({ items: [] }, () => {
        console.log('remove: 3');
        this.setState({ items: [] });
      });
    });
  }
  exchange = () => {
    console.log('exchange: 1');
    this.setState({
      items: [{
        children: '依次进入1',
        key: 1,
      }, {
        children: '依次进入2',
        key: 2,
      }],
    }, () => {
      console.log('exchange: 2');
      this.setState({
        items: [{
          children: '依次进入1',
          key: 1,
        }, {
          children: '依次进入2',
          key: 2,
        }],
      }, () => {
        console.log('exchange: 3');
        this.setState({
          items: [{
            children: '依次进入1',
            key: 1,
          }, {
            children: '依次进入2',
            key: 2,
          }],
        });
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.switch}>切换</button>
        <button onClick={this.remove}>多次刷空子级</button>
        <button onClick={this.exchange}>多次切换同样子级</button>
        <QueueAnim type={this.state.type}>
          {this.state.items.map((item) => <div key={item.key}>
            {item.children} <a href="#" onClick={this.remove.bind(this, item.key)}>删除</a>
          </div>)}
        </QueueAnim>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
