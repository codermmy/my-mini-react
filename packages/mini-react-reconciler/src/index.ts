import { Element } from '@mini-react/shared';

// Fiber 节点类型定义
export interface Fiber {
  tag: number;
  type: any;
  key: string | null;
  stateNode: any;
  child: Fiber | null;
  sibling: Fiber | null;
  return: Fiber | null;
  index: number;
  // 其他将来需要的字段
}

// 创建 Fiber 节点的函数框架
export function createFiber(element: Element): Fiber {
  // 用户将自行实现创建 fiber 的逻辑
  return {
    tag: 0,
    type: element.type,
    key: null,
    stateNode: null,
    child: null,
    sibling: null,
    return: null,
    index: 0,
  };
}

// diff 算法框架
export function reconcileChildren(current: Fiber | null, workInProgress: Fiber, elements: Element[]): Fiber | null {
  // 用户将自行实现 diff 算法
  return null;
}

// 导出模块
const Reconciler = {
  createFiber,
  reconcileChildren,
};

export default Reconciler; 