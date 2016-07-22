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
      if (ret || !c) {
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
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });

  next.forEach((c) => {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
  });

  // 保持原有的顺序
  pendingChildren.forEach((c) => {
    const originIndex = prev.indexOf(c);
    if (originIndex >= 0) {
      ret.splice(originIndex, 0, c);
    }
  });

  return ret;
}

export function transformArguments(arg, key, i) {
  let result;
  if (typeof arg === 'function') {
    result = arg({
      key,
      index: i,
    });
  } else {
    result = arg;
  }
  if (Array.isArray(result) && result.length === 2) {
    return result;
  }
  return [result, result];
}

export function getChildrenFromProps(props) {
  return props && props.children;
}

export function assignChild(data) {
  const obj = {};
  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key])) {
      obj[key] = [].concat(data[key]);
      return;
    } else if (typeof data[key] === 'object') {
      obj[key] = Object.assign({}, data[key]);
      return;
    }
    obj[key] = data[key];
    return;
  });
  return obj;
}

export function checkStyleName(p) {
  const a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
  if (p !== 'filter' && p in document.body.style) {
    return p;
  }
  const _p = p.charAt(0).toUpperCase() + p.substr(1);
  return `${(a.filter((key) => `${key}${_p}` in document.body.style)[0] || '')}${_p}`;
}
