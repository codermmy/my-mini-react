# example/vite.config.ts 说明文档

## 配置项说明

### resolve.alias
配置模块解析的路径别名，简化导入路径：

- `@mini-react/core`: 指向 mini-react 核心包的源代码
- `@mini-react/dom`: 指向 DOM 渲染器的源代码
- `@mini-react/reconciler`: 指向协调器的源代码
- `@mini-react/scheduler`: 指向调度器的源代码
- `@mini-react/shared`: 指向共享工具/类型的源代码
- `@mini-react/core/jsx-runtime`: 指向 JSX 运行时
- `@mini-react/core/jsx-dev-runtime`: 指向 JSX 开发运行时

这些别名使得可以使用简短的路径来导入模块，而不是使用相对路径。例如：
```ts
import { createElement } from '@mini-react/core'
// 而不是
import { createElement } from '../../../packages/mini-react/src'
```

### esbuild
配置 esbuild 转换选项（esbuild 是 Vite 内部使用的快速 JavaScript/TypeScript 转换器）：

- `jsxFactory`: "createElement" - 指定用于创建 JSX 元素的函数名（默认是 React.createElement）
- `jsxFragment`: "Fragment" - 指定用于 JSX 片段的组件名（默认是 React.Fragment）
- `jsxInject`: 在每个文件顶部自动注入代码，这里会在每个包含 JSX 的文件中自动导入 createElement 和 Fragment，这样就不需要在每个文件中手动导入这些函数

### optimizeDeps
配置依赖优化选项，影响 Vite 如何预构建和缓存依赖：

- `include`: ["@mini-react/core", "@mini-react/dom"] - 强制预构建的依赖列表，这些包会在开发服务器启动时被预先构建，提高加载性能 