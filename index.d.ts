// Type definitions for rc-queue-anim 1.6
// Project: https://github.com/react-component/queue-anim
// Definitions by: jljsj33 <https://github.com/jljsj33>
// Definitions: https://github.com/react-component/queue-anim
import * as React from 'react';

export type IQueueType = 'alpha' | 'left' | 'right' | 'top' | 'bottom' | 'scale' | 'scaleBig' | 'scaleX' | 'scaleY';
export type INumberOrArrayOrFunc = number | [number, number] | ((e: { key: string, index: number }) => number | [number, number]);
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
  'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce' | [number, number, number, number] |
  ((t: number, b: number, c: number, d: number) => number); // TweenOne ease path;

export type IQueueTypeOrArrayOrFunc = IQueueType | [IQueueType, IQueueType] | ((e: { key: string, index: number }) => IQueueType | [IQueueType, IQueueType]);
export type IEaseTypeOrArrayOrFunc = IEaseType | [IEaseType, IEaseType] | ((e: { key: string, index: number }) => IEaseType | [IEaseType, IEaseType]);
export type IAnimConfigOrArrayOrFunc = {} | [{}] | ((e: { key: string, index: number }) => {} | [{}, {}]);
export interface IProps {
  type?: IQueueTypeOrArrayOrFunc;
  animConfig?: IAnimConfigOrArrayOrFunc;
  delay?: INumberOrArrayOrFunc;
  duration?: INumberOrArrayOrFunc;
  interval?: INumberOrArrayOrFunc;
  leaveReverse?: boolean;
  ease?: IEaseTypeOrArrayOrFunc;
  appear?: boolean;
  component?: string | React.ReactNode;
  componentProps?: {};
  animatingClassName?: [string, string];
  forcedReplay?: boolean;
  onEnd?: (e: { key: string, type: string }) => void;
}

export default class RcQueueAnim extends React.Component<IProps> { }
