import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';

ReactDom.render(<div>
  <QueueAnim type="left">
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
  </QueueAnim>
  <QueueAnim type="top">
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
    <div>依次进入</div>
  </QueueAnim>
</div>, document.getElementById('__react-content'));

