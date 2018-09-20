// Type definitions for rc-queue-anim 1.6
// Project: https://github.com/react-component/queue-anim
// Definitions by: jljsj33 <https://github.com/jljsj33>
// Definitions: https://github.com/react-component/queue-anim
import * as React from 'react';

export type IQueueType = 'alpha' | 'left' | 'right' | 'top' | 'bottom' | 'scale' | 'scaleBig' | 'scaleX' | 'scaleY';
export type INumberOrArrayOrFunc = number | [number, number] | ((e: { key: string, index: number }) => number);
export type IEaseType = 'linear' |
  'easeInSine' | 'easeOutSine' | 'easeInOutSine' |
  'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' |
  'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' |
  'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' |
  'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' |
  'easeInExpo' | 'easeInOutExpo' | 'easeInOutExpo' |
  'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' |
  'easeInBack' | 'easeOutBack' | 'easeInOutBack' |
  'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' |
  'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce' |
  ((t: number, b: number, c: number, d: number) => number); // TweenOne ease path;

export interface IProps {
  type?: IQueueType;
  animConfig?: {} | [{}];
  delay?: INumberOrArrayOrFunc;
  duration?: INumberOrArrayOrFunc;
  interval?: INumberOrArrayOrFunc;
  leaveReverse?: boolean;
  ease?: IEaseType;
  appear?: boolean;
  component?: string | React.ReactNode;
  componentProps?: {};
  animatingClassName?: [string, string];
  forcedReplay?: boolean;
  onEnd?: (e: { key: string, type: string }) => void;
}

export default class RcQueueAnim extends React.Component<IProps> { }
