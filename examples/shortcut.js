/* eslint-disable no-console,react/no-multi-comp */
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(<div>
  <h3>left</h3>
  <QueueAnim type="left" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
  <h3>top</h3>
  <QueueAnim type="top" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
  <h3>right (default)</h3>
  <QueueAnim type="right" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
  <h3>bottom</h3>
  <QueueAnim type="bottom" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
  <h3>alpha</h3>
  <QueueAnim type="alpha" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
  <h3>scale</h3>
  <QueueAnim type="scale" style={{margin: '20px 0'}} interval={100}>
    <div key="1" style={{display: 'inline-block'}}>依次进入</div>
    <div key="2" style={{display: 'inline-block'}}>依次进入</div>
    <div key="3" style={{display: 'inline-block'}}>依次进入</div>
    <div key="4" style={{display: 'inline-block'}}>依次进入</div>
    <div key="5" style={{display: 'inline-block'}}>依次进入</div>
  </QueueAnim>
  <h3>scaleBig</h3>
  <QueueAnim type="scaleBig" style={{margin: '20px 0'}} interval={100}>
    <div key="1" style={{display: 'inline-block'}}>依次进入</div>
    <div key="2" style={{display: 'inline-block'}}>依次进入</div>
    <div key="3" style={{display: 'inline-block'}}>依次进入</div>
    <div key="4" style={{display: 'inline-block'}}>依次进入</div>
    <div key="5" style={{display: 'inline-block'}}>依次进入</div>
  </QueueAnim>
  <h3>scaleX</h3>
  <QueueAnim type="scaleX" style={{margin: '20px 0'}} interval={100}>
    <div key="1" style={{display: 'inline-block'}}>依次进入</div>
    <div key="2" style={{display: 'inline-block'}}>依次进入</div>
    <div key="3" style={{display: 'inline-block'}}>依次进入</div>
    <div key="4" style={{display: 'inline-block'}}>依次进入</div>
    <div key="5" style={{display: 'inline-block'}}>依次进入</div>
  </QueueAnim>
  <h3>scaleY</h3>
  <QueueAnim type="scaleY" style={{margin: '20px 0'}}>
    <div key="1">依次进入</div>
    <div key="2">依次进入</div>
    <div key="3">依次进入</div>
    <div key="4">依次进入</div>
    <div key="5">依次进入</div>
  </QueueAnim>
</div>, document.getElementById('__react-content'));
