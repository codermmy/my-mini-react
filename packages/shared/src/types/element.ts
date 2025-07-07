/**
 * @file packages/shared/src/types/element.ts
 * 
 * 定义与元素相关的基本类型，包括Element、Props、Key等
 */

/**
 * ElementType - 定义可能的元素类型
 * 可以是字符串(DOM元素)、函数(函数组件)或类(类组件)
 */
export type ElementType = string | Function | symbol;

/**
 * Props - 元素属性类型
 * 包含任意属性和可选的children
 */
export interface Props {
  [key: string]: any;
  children?: any;
}

/**
 * Element - 虚拟DOM元素类型
 * 包含type和props两个主要属性
 */
export interface Element {
  type: ElementType;
  props: Props;
}

/**
 * Key - 用于列表渲染的唯一标识
 */
export type Key = string | number;

/**
 * 效果标签 - 用于标记Fiber节点的操作类型
 */
export type EffectTag = 'PLACEMENT' | 'UPDATE' | 'DELETION' | null; 