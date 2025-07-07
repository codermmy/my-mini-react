/// <reference types="node" />

import { defineConfig } from 'vite';
import path from 'path';

/**
 * Vite 配置文件
 * 
 * Vite 是一个现代的前端构建工具，提供了快速的开发服务器和优化的生产构建。
 * 这个配置文件控制了 Vite 如何处理项目代码、依赖和构建过程。
 */
export default defineConfig({
  /**
   * resolve 部分配置模块解析选项
   * 这些选项决定 Vite 如何查找和处理导入的模块
   */
  resolve: {
    /**
     * alias 设置导入路径的别名
     * 这使得可以使用简短的路径来导入模块，而不是使用相对路径
     * 例如：import { createElement } from '@mini-react/core' 
     * 而不是 import { createElement } from '../../../packages/mini-react/src'
     */
    alias: {
      // 为每个包设置别名，指向其源代码位置
      '@mini-react/core': path.resolve(__dirname, '../packages/mini-react/src/index.ts'),
      '@mini-react/dom': path.resolve(__dirname, '../packages/mini-react-dom/src/index.ts'),
      '@mini-react/reconciler': path.resolve(__dirname, '../packages/mini-react-reconciler/src/index.ts'),
      '@mini-react/scheduler': path.resolve(__dirname, '../packages/scheduler/src/index.ts'),
      '@mini-react/shared': path.resolve(__dirname, '../packages/shared/src/index.ts'),
      // JSX 运行时路径别名，让 JSX 编译器能找到对应的文件
      '@mini-react/core/jsx-runtime': path.resolve(__dirname, '../packages/mini-react/src/jsx/jsx-runtime.ts'),
      '@mini-react/core/jsx-dev-runtime': path.resolve(__dirname, '../packages/mini-react/src/jsx/jsx-dev-runtime.ts')
    }
  },

  /**
   * esbuild 部分配置 esbuild 转换选项
   * esbuild 是 Vite 内部使用的快速 JavaScript/TypeScript 转换器
   */
  esbuild: {
    /**
     * jsxFactory - 指定用于创建 JSX 元素的函数名
     * 默认是 React.createElement，这里改为我们自己的 createElement
     */
    jsxFactory: 'createElement',

    /**
     * jsxFragment - 指定用于 JSX 片段的组件名
     * 默认是 React.Fragment，这里改为我们自己的 Fragment
     */
    jsxFragment: 'Fragment',

    /**
     * jsxInject - 在每个文件顶部自动注入代码
     * 这里会在每个包含 JSX 的文件中自动导入 createElement 和 Fragment
     * 这样就不需要在每个文件中手动导入这些函数
     */
    jsxInject: `import { createElement, Fragment } from '@mini-react/core'`
  },

  /**
   * optimizeDeps 部分配置依赖优化选项
   */
  optimizeDeps: {
    /**
     * 禁用对工作空间包的预构建，让Vite能够实时监听源码变化
     */
    exclude: ['@mini-react/core', '@mini-react/dom']
  },

  /**
   * 配置开发服务器
   */
  server: {
    /**
     * 配置文件系统监听器
     */
    watch: {
      /**
       * 监听packages目录下的文件变化
       */
      ignored: ['!**/node_modules/@mini-react/**', '!**/packages/**']
    }
  }
}); 