import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';

ReactDom.render(<QueueAnim interval="0.1" delay="0.3" duration="0.2">
  <div>依次进入</div>
  <div>依次进入</div>
  <div>依次进入</div>
  <div>依次进入</div>
  <div>依次进入</div>
</QueueAnim>, document.getElementById('__react-content'));
