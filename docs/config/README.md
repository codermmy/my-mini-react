# Mini-React 配置文件说明文档

本目录包含了 Mini-React 项目中所有配置文件的详细说明。这些文档帮助开发者理解每个配置文件的作用和选项含义。

## 根目录配置

- [package.json](./package.json.md) - 项目根目录的包配置，定义了项目名称、脚本和依赖
- [tsconfig.json](./tsconfig.json.md) - TypeScript 编译器配置，控制代码如何被编译为 JavaScript
- [pnpm-workspace.yaml](./pnpm-workspace.yaml.md) - pnpm 工作空间配置，定义了 monorepo 结构

## 包配置

- [mini-react/package.json](./mini-react-package.json.md) - Mini-React 核心包的配置
- [example/package.json](./example-package.json.md) - 示例应用的包配置
- [example/tsconfig.json](./example-tsconfig.json.md) - 示例应用的 TypeScript 配置

## 构建和开发工具配置

- [example/vite.config.ts](./vite.config.ts.md) - Vite 构建工具配置，控制开发服务器和生产构建
- [example/index.html](./index.html.md) - 示例应用的 HTML 入口文件 