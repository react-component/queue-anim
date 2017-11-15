/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
import './assets/animating-class.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  removeAll = () => {
    this.setState({
      items: [],
    });
  }

  render() {
    return (
      <div>
        <QueueAnim>
          {this.state.items.map((item) => <div key={item.key}>
            {item.children}
          </div>)}
        </QueueAnim>
        <button onClick={this.removeAll}>移出所有</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
