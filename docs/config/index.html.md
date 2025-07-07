# example/index.html 说明文档

这是 Mini React 示例应用的 HTML 入口文件，定义了页面的基本结构和样式。

## 主要部分说明

### 元数据和资源
- `<meta charset="UTF-8">` - 设置文档字符编码为 UTF-8
- `<link rel="icon">` - 设置网站图标（favicon）
- `<meta name="viewport">` - 控制页面在移动设备上的显示方式，确保响应式设计
- `<title>Mini React Example</title>` - 设置页面标题

### 样式定义
文件包含内联 CSS 样式，定义了应用的视觉外观：

- 基本样式重置 - 确保一致的边距和填充
- 页面基本样式 - 设置字体、背景色和文本颜色
- 应用容器样式 - 限制内容宽度并居中显示
- 标题样式 - 为 h1 和 h2 设置样式
- 按钮样式 - 定义按钮外观和悬停效果
- 容器样式 - 为内容块提供白色背景和阴影
- 计数器显示样式 - 设置计数器数字的显示样式

### DOM 结构
- `<div id="root"></div>` - 根容器，Mini React 将在这里渲染应用

### 脚本引用
- `<script type="module" src="/src/main.tsx"></script>` - 引入应用的入口点脚本
  - `type="module"` 允许使用 ES 模块语法 (import/export)
  - 当 Vite 开发服务器运行时，它会处理这个导入，提供热重载等功能 