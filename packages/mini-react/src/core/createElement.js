/**
 * @file packages/mini-react/src/core/createElement.ts
 *
 * 提供createElement函数，用于创建虚拟DOM元素
 */
import { debugLog } from '@mini-react/shared';
// 添加一个立即执行的日志，确认模块被加载
/**
 * createElement 函数 - 创建虚拟 DOM 元素
 *
 * 这是 Mini React 的核心函数，负责将 JSX 转换为虚拟 DOM 元素。
 * 当编译器遇到 JSX 代码时，会将其转换为 createElement 调用。
 *
 * @param type 元素类型 - 字符串(如 'div', 'span')用于原生 DOM 元素，或函数/类用于组件
 * @param props 元素属性 - 包含事件处理器、样式、className 等
 * @param children 子元素 - 可以是文本、数字、虚拟 DOM 元素或它们的数组
 * @returns 返回表示 React 元素的虚拟 DOM 对象
 *
 * @example
 * // 这段 JSX:
 * // <div className="container">Hello World</div>
 * // 会被转换为:
 * createElement('div', { className: 'container' }, 'Hello World');
 */
export function createElement(type, props, ...children) {
    // 添加更明显的控制台日志
    // 添加更详细的日志，用于调试
    debugLog('createElement', '创建元素', {
        type: typeof type === 'function' ? type.name || '匿名函数' : type,
        props,
        childrenCount: children.length,
    });
    // 创建虚拟 DOM 元素结构
    // type: 元素类型 (如 'div' 或组件函数)
    // props: 包含所有属性和子元素
    const element = {
        type,
        props: {
            ...props, // 展开所有传入的属性
            children: children.length > 0 ? children : undefined, // 只在有子元素时添加 children 属性
        },
    };
    debugLog('createElement', '元素创建完成', element);
    return element;
}
/**
 * Fragment 组件 - 允许返回多个元素而无需额外的包装容器
 *
 * 使用 Fragment 可以将多个子元素组合在一起返回，而不会在 DOM 中创建额外的节点。
 *
 * @example
 * // 使用 Fragment 明确语法
 * return (
 *   <Fragment>
 *     <ChildA />
 *     <ChildB />
 *   </Fragment>
 * );
 *
 * // 或使用短语法
 * return (
 *   <>
 *     <ChildA />
 *     <ChildB />
 *   </>
 * );
 */
export const Fragment = Symbol('Fragment');
