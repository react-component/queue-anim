/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
import '../assets/switch.less';

class Demo extends React.Component {
  constructor() {
    super(...arguments);
    this.childrenKey = [
      { key: 1 },
      { key: 2 },
      { key: 3 },
      { key: 4 },
      { key: 5 },
      { key: 6 },
    ];
    this.state = {
      childrenKey: this.childrenKey,
    };
  }

  onEnter = () => {
    this.setState({
      childrenKey: null,
    });
  };

  onLeave = () => {
    this.setState({
      childrenKey: this.childrenKey,
    });
  };

  getChildren = () => {
    return (this.state.childrenKey || []).map(item => {
      return (<li key={item.key} />);
    });
  };

  render() {
    const childrenToRender = this.getChildren();
    return (<div className="switch" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
      <QueueAnim component="ul" leaveReverse delay={[0, 300]} type="scale">
        {childrenToRender}
      </QueueAnim>
      <QueueAnim component="ul" leaveReverse delay={150} type="scale">
        {childrenToRender}
      </QueueAnim>
      <QueueAnim component="ul" leaveReverse delay={[300, 0]} type="scale">
        {childrenToRender}
      </QueueAnim>
    </div>);
  }
}

ReactDom.render(<Demo />, document.getElementById('__react-content'));
