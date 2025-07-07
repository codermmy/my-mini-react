# tsconfig.json 说明文档

## 编译器选项 (compilerOptions)

### JavaScript输出配置
- `target`: "ES2020" - 指定生成的JavaScript代码的ECMAScript目标版本，ES2020支持较新的语言特性，如可选链操作符(?.)和空值合并操作符(??)
- `module`: "ESNext" - 指定生成的JavaScript模块的系统，ESNext表示使用最新的ECMAScript模块语法
- `useDefineForClassFields`: true - 使用Object.defineProperty定义类字段，表示使用ES2022标准的类字段语义

### 类型检查和语法规则
- `strict`: true - 启用所有严格类型检查选项，包括strictNullChecks, strictFunctionTypes等
- `noUnusedLocals`: true - 报告未使用的局部变量的错误，有助于保持代码整洁
- `noUnusedParameters`: true - 报告未使用的参数的错误，有助于识别冗余代码
- `noFallthroughCasesInSwitch`: true - 防止switch语句中的case意外贯穿，要求每个case都有break/return或显式的fallthrough注释

### 模块解析配置
- `moduleResolution`: "bundler" - 指定模块解析策略，bundler是针对打包工具的解析策略，适用于Vite/Webpack等
- `allowImportingTsExtensions`: true - 允许导入带有.ts/.tsx扩展名的文件，这在使用Vite等不需要编译输出的工具时很有用
- `resolveJsonModule`: true - 允许导入.json文件，使TypeScript能够理解和处理JSON导入
- `isolatedModules`: true - 确保每个文件都可以独立编译，对于使用Babel等转换工具很重要，因为它们通常一次只能处理一个文件

### JSX配置
- `jsx`: "preserve" - 指定JSX代码如何处理，preserve保留JSX语法，交由Babel/Vite等工具处理
- `jsxImportSource`: "@mini-react/core" - 指定JSX工厂函数的导入来源，使JSX使用我们自己的实现

### 路径别名
- `paths`: {...} - 设置导入路径的别名，简化导入语句，例如:
  - `"@mini-react/core": ["./packages/mini-react/src/index.ts"]`
  - `"@mini-react/dom": ["./packages/mini-react-dom/src/index.ts"]`
  - `"@mini-react/reconciler": ["./packages/mini-react-reconciler/src/index.ts"]`
  - `"@mini-react/scheduler": ["./packages/scheduler/src/index.ts"]`
  - `"@mini-react/shared": ["./packages/shared/src/index.ts"]`
  - `"@mini-react/core/jsx-runtime": ["./packages/mini-react/src/jsx-runtime.ts"]`
  - `"@mini-react/core/jsx-dev-runtime": ["./packages/mini-react/src/jsx-dev-runtime.ts"]`

### 其他选项
- `lib`: ["ES2020", "DOM", "DOM.Iterable"] - 指定要包含的内置TypeScript类型定义库，提供了不同环境中可用的API的类型定义
- `skipLibCheck`: true - 跳过对声明文件(.d.ts)的类型检查，设置为true可加快编译速度，但可能错过声明文件中的类型错误
- `noEmit`: true - 不生成输出文件，当使用Vite/Webpack等工具处理编译时，TypeScript仅用于类型检查

## 文件包含/排除
- `include`: ["packages/**/*", "example/**/*"] - 指定要包含在编译中的文件或目录的glob模式，这些文件将被TypeScript编译器处理
- `exclude`: ["**/node_modules", "**/dist"] - 指定要从编译中排除的文件或目录，这些文件不会被TypeScript编译器处理 