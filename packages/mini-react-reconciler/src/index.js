// 创建 Fiber 节点的函数框架
export function createFiber(element) {
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
export function reconcileChildren(current, workInProgress, elements) {
    // 用户将自行实现 diff 算法
    return null;
}
// 导出模块
const Reconciler = {
    createFiber,
    reconcileChildren,
};
export default Reconciler;
