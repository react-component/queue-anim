/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import 'antd/lib/style/index.less';
import 'antd/lib/menu/style/index.less';

const Comp = React.forwardRef((props: any, ref: any) => {
  return (
    <ul ref={ref} {...props}>
      {props.children}
    </ul>
  );
});

const Child = React.forwardRef((props: any, ref: any) => {
  return <li ref={ref}>{props.children}</li>;
});


export default () => {
  return (
    <QueueAnim
      component={Comp}
      style={{ width: 240, margin: 20 }}
      componentProps={{ style: { background: 'red' } }}
      type="left"
    >
      <Child key="1">依次进入</Child>
      <Child key="2">依次进入</Child>
      <Child key="3">依次进入</Child>
      <Child key="4">依次进入</Child>
      <Child key="5">依次进入</Child>
    </QueueAnim>
  );
};
