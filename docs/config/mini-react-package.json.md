# packages/mini-react/package.json 说明文档

## 配置项说明

### 基本信息
- `name`: "@mini-react/core" - 包名，在monorepo中指定了包的命名空间和名称，表示这是mini-react项目中的核心包
- `version`: "1.0.0" - 版本号，遵循语义化版本规范(semver)，表示第一个稳定版本
- `private`: true - 标记此包为私有，不会发布到npm，用于内部包或开发阶段的包

### 入口文件设置
- `main`: "src/index.ts" - 主入口文件，当导入包时默认加载的文件，src/index.ts是源代码入口
- `types`: "src/index.ts" - 指定TypeScript类型定义文件，为JavaScript/TypeScript使用者提供类型信息

### 脚本配置
- `build`: "tsc" - 编译TypeScript代码为JavaScript，使用TypeScript编译器(tsc)执行编译

### 依赖项
- `dependencies`:
  - `@mini-react/shared`: "workspace:*" - 引用同一monorepo中的shared包，workspace:*语法表示使用工作区中的版本，而不是npm注册表中的版本

### 开发依赖项
- `devDependencies`:
  - `typescript`: "^5.2.2" - TypeScript编译器，^符号表示可以接受任何兼容的次要版本更新 