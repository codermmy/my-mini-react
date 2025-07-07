/**
 * @file packages/shared/src/index.ts
 * 
 * 共享类型和工具函数，供所有包使用
 */

// 导出所有类型定义
export * from './types/element';

// 导出工具函数
export * from './utils/debug';

/**
 * 判断是否为函数组件的工具函数
 * 
 * @param element 要检查的元素或元素类型
 * @returns 如果是函数组件则返回 true
 */
export function isFunctionComponent(element: any): boolean {
  return typeof element.type === 'function' && 
         !(element.type.prototype && element.type.prototype.render);
}

/**
 * 判断是否为类组件的工具函数
 * 
 * @param element 要检查的元素或元素类型
 * @returns 如果是类组件则返回 true
 */
export function isClassComponent(element: any): boolean {
  return typeof element.type === 'function' && 
         !!element.type.prototype && 
         !!element.type.prototype.render;
} 