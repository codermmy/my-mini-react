# pnpm-workspace.yaml 说明文档

pnpm-workspace.yaml 文件定义了 pnpm 工作空间的结构，工作空间允许在一个仓库中管理多个相互依赖的包。

## 配置项说明

### packages 
定义了哪些目录包含工作空间的包：

- `packages/*` - 匹配packages目录下的所有直接子目录，例如：packages/mini-react, packages/mini-react-dom等
- `example` - 将example目录作为一个单独的包，这允许示例应用依赖其他包并被pnpm命令识别

## 工作空间优势

1. 本地包可以相互依赖，无需发布到npm
2. 可以在根目录执行命令，作用于所有或特定的包
3. 依赖可以被提升到根目录，减少重复安装
4. 可以使用`pnpm --filter`对特定包执行命令 