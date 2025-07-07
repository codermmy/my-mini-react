/**
 * @file packages/mini-react/src/jsx/jsx-dev-runtime.ts
 * 
 * JSX 开发时运行时 - 提供开发环境下的 JSX 转换函数
 * 与生产环境的 jsx-runtime 相比，这个文件提供了更多的开发时调试信息
 */

import { createElement, Fragment } from '../core/createElement';
import { ElementType, Props, debugLog } from '@mini-react/shared';


/**
 * jsxDEV 函数 - 开发环境的 JSX 转换函数
 * 
 * 这个函数在开发环境中用于 JSX 转换，提供更丰富的调试信息。
 * 它包装了生产环境的 jsx 函数，但添加了额外的源代码位置信息。
 * 
 * @param type 元素类型
 * @param props 元素属性
 * @param key 元素 key
 * @param isStaticChildren 是否有静态子元素
 * @param source 源代码位置信息
 * @param self 当前模块的引用
 * @returns React 元素对象
 */
export function jsxDEV(type: ElementType, props: Props, key: string | null, isStatic: boolean, source: any, self: any) {

  
  // 处理 key
  const newProps = { ...props };
  if (key !== null) {
    newProps.key = key;
  }
  
  // 添加开发环境的源代码信息
  if (source) {
    newProps.__source = source;
  }
  
  // 调用 createElement 创建元素
  const result = createElement(type, newProps);
  return result;
}

/**
 * jsxsDEV 函数 - 处理有多个静态子元素的 JSX 表达式（开发环境版本）
 */
export const jsxsDEV = jsxDEV;

// 导出Fragment
export { Fragment }; 