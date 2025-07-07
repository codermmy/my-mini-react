# package.json 说明文档

## 主要配置项说明

### 基本信息
- `name`: "my-mini-react" - 项目名称，整个Monorepo的名称，使用短横线分隔的小写字母形式
- `version`: "1.0.0" - 项目版本号，遵循语义化版本规范(semver)，格式: 主版本.次版本.修订版本
- `private`: true - 表示此包不会被发布到npm注册表，对于monorepo根包通常设置为true
- `description`: "Mini React implementation for learning purposes" - 项目描述，简短说明项目的用途

### 脚本配置 (scripts)
- `dev`: "pnpm --filter example dev" - 启动开发服务器，--filter example表示只运行example包中的dev脚本
- `build`: "pnpm --filter \"./packages/**\" build" - 构建所有包，"./packages/**"是一个glob模式，匹配packages目录下的所有包
- `build:example`: "pnpm --filter example build" - 构建示例应用，只构建example包
- `clean`: "rimraf node_modules **/*/node_modules **/*/dist" - 清理项目生成的文件，删除所有node_modules、dist目录等临时/生成文件，rimraf是一个跨平台的rm -rf命令

### 开发依赖 (devDependencies)
- `rimraf`: "^5.0.5" - 用于跨平台删除文件和目录，类似于Unix的rm -rf命令
- `typescript`: "^5.2.2" - TypeScript编译器，将TypeScript代码转换为JavaScript

### 环境要求 (engines)
- `node`: ">=16.0.0" - 要求的Node.js最低版本
- `pnpm`: ">=8.0.0" - 要求的pnpm包管理器最低版本 