# example/package.json 说明文档

## 配置项说明

### 基本信息
- `name`: "@mini-react/example" - 示例应用的包名
- `private`: true - 标记为私有包，不会发布到npm
- `version`: "1.0.0" - 版本号

### 脚本配置
- `dev`: "vite" - 启动开发服务器，使用Vite创建热重载开发环境
- `build`: "tsc && vite build" - 构建生产版本，先运行TypeScript类型检查，然后打包应用优化后的版本
- `preview`: "vite preview" - 预览生产构建，在本地预览生产构建的应用

### 依赖项
- `dependencies`:
  - `@mini-react/core`: "workspace:*" - 自定义React核心实现，提供createElement、Component等功能，使用工作区中的版本
  - `@mini-react/dom`: "workspace:*" - 自定义ReactDOM实现，提供render等DOM渲染功能

### 开发依赖
- `devDependencies`:
  - `typescript`: "^5.2.2" - TypeScript编译器
  - `vite`: "^5.0.0" - 现代前端构建工具，提供快速的开发服务器和优化的构建 