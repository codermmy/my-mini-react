/**
 * @file packages/mini-react/src/jsx/jsx-runtime.ts
 * 
 * JSX 运行时 - 提供生产环境下的 JSX 转换函数
 */

import { createElement, Fragment } from '../core/createElement';
import { ElementType, Props, debugLog } from '@mini-react/shared';

/**
 * jsx 函数 - 生产环境的 JSX 转换函数
 * 
 * 这是 React 17+ 新 JSX 转换中使用的函数。当 JSX 被编译时：
 * - 旧转换: React.createElement(type, props, ...children)
 * - 新转换: jsx(type, props, key)
 * 
 * 新的转换方式更高效，因为它不需要展开子元素，并且可以更好地进行优化。
 * 
 * @param type 元素类型 - 字符串(原生元素)或函数/类(组件)
 * @param props 元素属性 - 包含所有属性和子元素
 * @param key 元素的 key - 用于列表渲染的优化
 * @returns React 元素对象
 * 
 * @example
 * // <div>Hello</div> 会被转换为:
 * jsx('div', { children: 'Hello' }, null);
 */
export function jsx(type: ElementType, props: Props, key: string | null) {
  // 添加更明显的控制台日志

  
  // 处理 key - 如果提供了 key，将其添加到 props 中
  // key 对于列表渲染的优化很重要，帮助 React 识别哪些项变化了
  const newProps = { ...props };
  if (key !== null) {
    newProps.key = key;
  }
  
  // 调用 createElement 创建实际的 React 元素
  const result = createElement(type, newProps);
  return result;
}

/**
 * jsxs 函数 - 处理有多个静态子元素的 JSX 表达式
 * 
 * 在新的 JSX 转换中，对于已知具有多个子元素的静态 JSX，编译器会使用 jsxs 而不是 jsx。
 * 在我们的实现中，jsxs 和 jsx 是相同的，但在 React 的实现中可能有优化差异。
 * 
 * @param type 元素类型
 * @param props 元素属性
 * @param key 元素 key
 * @returns React 元素对象
 * 
 * @example
 * // <div><span>A</span><span>B</span></div> 会被转换为:
 * jsxs('div', { children: [jsx('span', { children: 'A' }), jsx('span', { children: 'B' })] }, null);
 */
export const jsxs = jsx;

// 导出Fragment
export { Fragment }; 