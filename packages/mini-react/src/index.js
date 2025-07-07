/**
 * @file packages/mini-react/src/index.ts
 *
 * Mini React 核心包的入口文件
 * 导出所有公共API
 */
// 导出核心API
export { createElement, Fragment } from './core/createElement';
export { Component } from './core/Component';
// 导出JSX运行时 (这些导出对于JSX转换是必要的)
export * from './jsx/jsx-runtime';
export * from './jsx/jsx-dev-runtime';
