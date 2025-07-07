# example/tsconfig.json 说明文档

## 配置项说明

### 继承配置
- `extends`: "../tsconfig.json" - 继承另一个tsconfig文件的配置，这里继承了项目根目录中的tsconfig.json，这样可以避免重复配置，同时可以在此添加或覆盖特定配置

### 编译器选项
- `compilerOptions`:
  - `composite`: true - 启用项目引用功能，使这个tsconfig成为一个可以被其他项目引用的"复合项目"
  - `outDir`: "dist" - 指定输出目录，编译后的JavaScript文件将被放置在这里
  - `jsxImportSource`: "@mini-react/core" - 指定JSX工厂函数的导入来源，确保使用我们自己的Mini-React实现来处理JSX

### 包含文件
- `include`: ["src"] - 指定要包含在编译中的文件，这里包括所有在src目录下的TypeScript/JavaScript文件 