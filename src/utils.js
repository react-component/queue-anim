import React from 'react';

export function toArrayChildren(children) {
  const ret = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}

export function findChildInChildrenByKey(children, key) {
  let ret = null;
  if (children) {
    children.forEach((c) => {
      if (ret) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

export function mergeChildren(prev, next) {
  let ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  const nextChildrenPending = {};
  let pendingChildren = [];
  prev.forEach((c) => {
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(c);
    }
  });

  next.forEach((c) => {
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
  });
  const leavaItem = [];
  pendingChildren.map((item)=> {
    const index = prev.indexOf(item);
    let nextIndex;
    for (let i = index + 1; i < prev.length; i++) {
      const _item = prev[i];
      for (let ii = 0; ii < next.length; ii++) {
        const newItem = next[ii];
        if (newItem.key === _item.key) {
          nextIndex = ii;
          break;
        }
      }
      if (nextIndex) {
        break;
      }
    }
    if (!(typeof nextIndex === 'number')) {
      for (let j = index - 1; j >= 0; j--) {
        const __item = prev[j];
        for (let jj = 0; jj < next.length; jj++) {
          const _newItem = next[jj];
          if (__item.key === _newItem.key) {
            nextIndex = jj + 1;
            break;
          }
        }
        if (nextIndex) {
          break;
        }
      }
    }
    if (nextIndex) {
      ret.splice(nextIndex, 0, item);
    } else {
      leavaItem.push(item);
    }
  });
  ret = ret.concat(leavaItem);
  return ret;
}

export function transformArguments(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }
  return [arg, arg];
}

export function getChildrenFromProps(props) {
  const children = props.children;
  if (React.isValidElement(children)) {
    if (!children.key) {
      return React.cloneElement(children, {
        key: defaultKey,
      });
    }
  }
  return children;
}
