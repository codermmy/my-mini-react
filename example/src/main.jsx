/**
 * @file example/src/main.tsx
 *
 * 示例应用的入口文件，展示了如何使用自定义的 Mini React 框架。
 * 本文件演示了函数组件、事件处理和 JSX 语法的基本用法。
 */
// 导入 Mini React DOM 渲染 API
import MiniReactDOM from '@mini-react/dom';
// 导入调试工具
import { debugLog, printElementTree } from '../../packages/shared/src/utils/debug';
// 注意：createElement和Fragment由Vite的jsxInject自动注入
/**
 * Counter 组件 - 演示简单的函数组件
 * @returns 返回计数器 UI 元素
 */
function Counter() {
    debugLog('组件', 'Counter 函数组件被调用');
    /**
     * 按钮点击处理函数
     * 在实际的 React 中，这里会使用 setState 或 useState 更新状态
     */
    const handleClick = () => {
        debugLog('事件', '计数器按钮被点击');
        alert('按钮点击事件！在实现 useState 钩子前，这里暂时不能修改状态。');
    };
    // 返回 JSX 结构，会被转换为 createElement 调用
    return (<div className="counter">
      <h2>计数器</h2>
      <p>当前计数: 0</p>
      <button onClick={handleClick}>
        +1
      </button>
    </div>);
}
/**
 * App 组件 - 应用程序的根组件
 *
 * 包含整个应用的 UI 结构和组件层次。
 *
 * @returns 返回应用程序的 UI 结构
 */
function App() {
    debugLog('组件', 'App 函数组件被调用');
    // 返回应用程序的 JSX 结构
    return (<div className="app">
      {/* 页眉部分 */}
      <header className="app-header">
        <h1>Mini React 示例</h1>
        <p>这是一个使用自定义 createElement 和 render 实现的简单 React</p>
      </header>
      
      {/* 主体内容 */}
      <main>
        {/* 组件测试区域 */}
        <section>
          <h2>组件测试</h2>
          {/* 使用 Counter 组件 */}
          <Counter />
        </section>
        
        {/* 事件处理测试区域 */}
        <section>
          <h2>事件处理测试</h2>
          <button onClick={() => {
            // 事件处理函数，将在按钮点击时执行
            debugLog('事件', '主页面按钮被点击');
            console.log('主页面按钮点击事件');
        }} style="margin: 10px; padding: 8px 16px;">
            点击测试
          </button>
        </section>
      </main>
      
      {/* 页脚部分 */}
      <footer>
        <p>Mini React 版本: 1.0.0</p>
      </footer>
    </div>);
}
// 记录应用初始化
// 获取 DOM 中的根节点
const rootElement = document.getElementById('root');
// 创建 App 元素 - 这会调用 createElement
const appElement = <App />;
console.log('📦 创建的App元素:', appElement);
// 打印元素树结构，便于理解元素层次
debugLog('元素树', 'App 组件的元素树');
printElementTree(appElement);
// 渲染应用 - 将虚拟 DOM 转换为实际 DOM 并添加到页面
console.log('🎭 开始渲染应用:');
MiniReactDOM.render(appElement, rootElement);
// // 测试更简单的元素创建和显示
// const simpleElement = <div>这是一个简单的 div</div>;
// console.log('📦 简单元素:', simpleElement);
// debugLog('元素', '简单 JSX 示例', simpleElement); 
