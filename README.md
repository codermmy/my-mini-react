# Mini React 从零实现

一个轻量级的 React 实现，旨在帮助理解 React 的核心原理和工作机制。本项目采用 monorepo 架构，使用 TypeScript 实现，通过手写核心 API 来学习 React 的精髓。

## 项目概述

Mini React 实现了 React 的核心功能，包括虚拟 DOM、组件系统、JSX 支持、事件处理、Fiber 架构和状态管理等。项目使用 **pnpm** 作为包管理工具，**TypeScript** 作为开发语言，**Vite** 作为构建工具，并采用 **monorepo** 架构管理多个包。

## 项目架构

### 技术栈

- **包管理**: pnpm + workspace
- **语言**: TypeScript
- **构建工具**: Vite
- **项目架构**: Monorepo

### 目录结构

```
mini-react/
├── example/                     # 示例应用
│   ├── public/                  # 静态资源
│   ├── src/                     # 示例代码
│   ├── index.html              # HTML 入口
│   ├── vite.config.ts          # Vite 配置
│   └── tsconfig.json           # TypeScript 配置
├── packages/
│   ├── mini-react/             # React 核心 API
│   ├── mini-react-dom/         # ReactDOM 相关 API
│   ├── mini-react-reconciler/  # 调和器实现
│   ├── scheduler/              # 任务调度
│   └── shared/                 # 共享类型和工具
├── docs/                       # 文档目录
├── pnpm-workspace.yaml         # 工作空间配置
├── package.json                # 项目配置
└── tsconfig.json               # TS 配置
```

## 核心模块详解

### mini-react (核心包)

实现 React 的核心 API，是整个框架的基础。

**主要功能**:
- **createElement**: 创建虚拟 DOM 元素，JSX 转换的核心
- **Component**: 类组件基类，提供 setState、forceUpdate 等功能
- **Fragment**: 支持返回多个元素而不需要额外的 DOM 节点
- **JSX 运行时**: 支持 JSX 的编译和运行

**核心文件**:
- `src/index.ts`: 主入口，导出核心 API
- `src/jsx-runtime.ts`: 生产环境 JSX 运行时
- `src/jsx-dev-runtime.ts`: 开发环境 JSX 运行时
- `src/jsx.d.ts`: JSX 类型定义

### mini-react-dom (DOM 渲染器)

负责将虚拟 DOM 渲染到真实 DOM，是 React 与浏览器交互的桥梁。

**主要功能**:
- **render**: 将虚拟 DOM 渲染到指定的 DOM 容器
- **unmountComponentAtNode**: 卸载组件
- **DOM 操作**: 创建、更新和删除 DOM 元素
- **事件处理**: 处理和委托 DOM 事件

**核心文件**:
- `src/index.ts`: 导出 render 等 API
- `src/dom-operations.ts`: DOM 操作相关函数

### mini-react-reconciler (协调器)

实现 Fiber 架构和 diff 算法，是 React 的核心调和引擎。

**主要功能**:
- **Fiber 架构**: 实现可中断、可恢复的渲染单元
- **Diff 算法**: 高效比较新旧虚拟 DOM 树的差异
- **工作循环**: 管理渲染工作的调度和执行
- **提交阶段**: 将变更应用到真实 DOM

**核心文件**:
- `src/index.ts`: 导出协调器 API
- `src/fiber.ts`: Fiber 节点定义和操作
- `src/work-loop.ts`: 工作循环实现
- `src/reconciler.ts`: 调和算法实现

### scheduler (调度器)

管理任务的优先级和执行顺序，使渲染过程更加高效。

**主要功能**:
- **任务调度**: 根据优先级调度任务
- **时间分片**: 将长任务分割成小片段执行，避免阻塞主线程
- **优先级管理**: 定义不同级别的任务优先级
- **任务队列**: 管理待执行的任务

**核心文件**:
- `src/index.ts`: 导出调度器 API
- `src/scheduler.ts`: 调度器实现
- `src/priority.ts`: 优先级定义和管理

### shared (共享工具)

提供各个包共用的类型定义、常量和工具函数。

**主要功能**:
- **类型定义**: 定义 Element、Props 等核心类型
- **常量**: 定义优先级、效果标签等常量
- **工具函数**: 提供各种辅助函数
- **错误处理**: 统一的错误处理机制

**核心文件**:
- `src/index.ts`: 导出共享内容
- `src/types.ts`: 类型定义
- `src/constants.ts`: 常量定义
- `src/utils.ts`: 工具函数

## 核心实现原理

### 1. 虚拟 DOM

虚拟 DOM 是 React 的核心概念，它是一个简单的 JavaScript 对象，代表真实的 DOM 结构：

```typescript
// 虚拟 DOM 元素的基本结构
{
  type: string | Function,  // 'div', 'span' 或函数组件/类组件
  props: {
    // 元素属性，如 className, style 等
    children: Array | string | number // 子元素
  }
}
```

### 2. Fiber 架构

Fiber 是 React 16 引入的新协调引擎，用于实现增量渲染：

```typescript
interface Fiber {
  type: string | Function;
  props: Props;
  dom: HTMLElement | null;
  parent: Fiber | null;
  child: Fiber | null;
  sibling: Fiber | null;
  alternate: Fiber | null;
  effectTag: 'PLACEMENT' | 'UPDATE' | 'DELETION' | null;
}
```

### 3. 调和过程

调和是将虚拟 DOM 转换为真实 DOM 的过程，大致分为以下步骤：

1. 创建 Fiber 树
2. 处理每个 Fiber 节点
3. 提交更改到真实 DOM

### 4. 状态管理

组件状态通过 `setState` 方法更新，触发重新渲染：

```typescript
class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  setState(partialState) {
    this.state = { ...this.state, ...partialState };
    // 触发重新渲染
  }

  render() {
    throw new Error('Component must implement render method');
  }
}
```

## 学习路径

通过学习 Mini React，你可以深入理解以下 React 核心概念：

1. **JSX 和虚拟 DOM**: 了解 JSX 如何转换为函数调用和虚拟 DOM 对象
2. **组件系统**: 掌握函数组件和类组件的工作原理
3. **渲染流程**: 理解从虚拟 DOM 到真实 DOM 的转换过程
4. **Fiber 架构**: 学习 React 的并发模式和增量渲染
5. **状态管理**: 理解 state、props 和生命周期的工作机制
6. **调度系统**: 了解 React 如何优化渲染性能

## 配置文档

项目中的各种配置文件详细说明可以在 [文档中心](./docs/README.md) 的 [配置文档](./docs/config/README.md) 部分找到。

## 开发指南

### 安装

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/mini-react.git
cd mini-react
```

2. 安装依赖：
```bash
pnpm install
```

3. 启动开发服务器：
```bash
pnpm dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建示例应用
pnpm build:example
```

## 许可

MIT License

---

这个项目旨在学习和教育目的，不推荐在生产环境中使用。 