/**
 * @file debug.ts
 *
 * 调试工具和辅助函数集合，用于在开发过程中帮助理解和调试 Mini React。
 * 这些工具不是 Mini React 核心功能的一部分，但对于学习和理解内部工作原理非常有用。
 */
/**
 * 控制是否启用调试日志的全局开关
 * 在生产环境中，可以将其设置为 false 以禁用所有调试输出
 */
export const DEBUG = true;
/**
 * debugLog 函数 - 结构化调试日志工具
 *
 * 按作用域组织的日志输出，包含调用栈信息，便于调试。
 * 只有在 DEBUG 为 true 时才会输出日志。
 *
 * @param scope 日志作用域，指示日志来自哪个模块或功能
 * @param message 日志消息
 * @param data 可选的数据对象，将被打印出来
 *
 * @example
 * // 记录组件渲染
 * debugLog('Component', 'MyComponent is rendering', { props });
 *
 * // 记录事件处理
 * debugLog('Event', 'Click event fired', { target, event });
 */
export function debugLog(scope, message, data) {
    if (!DEBUG)
        return;
    // 使用折叠组创建更整洁的日志输出
    console.groupCollapsed(`🔍 [Mini-React] ${scope}: ${message}`);
    // 如果提供了数据，则打印出来
    if (data !== undefined) {
        console.log(data);
    }
    // 打印调用栈，便于追踪调用来源
    console.trace('调用栈');
    // 结束日志组
    console.groupEnd();
}
/**
 * traceComponentRender 函数 - 跟踪组件渲染性能和过程
 *
 * 这个函数在组件开始渲染时调用，返回一个结束函数，在渲染完成时调用。
 * 它会测量渲染时间并记录组件的 props，便于分析性能和数据流。
 *
 * @param componentName 组件名称
 * @param props 组件属性
 * @returns 一个函数，在组件渲染完成时调用
 *
 * @example
 * function MyComponent(props) {
 *   const endTrace = traceComponentRender('MyComponent', props);
 *   // 渲染逻辑...
 *   endTrace(); // 渲染完成后调用
 *   return <div>...</div>;
 * }
 */
export function traceComponentRender(componentName, props) {
    if (!DEBUG)
        return () => { };
    // 创建一个日志组，包含组件名称
    console.group(`⚛️ 渲染组件: ${componentName}`);
    // 打印组件的 props
    console.log('Props:', props);
    // 记录开始时间，用于计算渲染耗时
    const startTime = performance.now();
    // 返回结束函数，在组件渲染完成时调用
    return () => {
        const endTime = performance.now();
        // 计算并打印渲染时间
        console.log(`✅ 渲染完成，耗时: ${(endTime - startTime).toFixed(2)}ms`);
        // 结束日志组
        console.groupEnd();
    };
}
/**
 * traceEvent 函数 - 跟踪事件处理过程
 *
 * 用于调试事件处理过程，记录事件名称、数据和调用栈。
 *
 * @param eventName 事件名称
 * @param eventData 事件数据
 *
 * @example
 * function handleClick(e) {
 *   traceEvent('click', e);
 *   // 事件处理逻辑...
 * }
 */
export function traceEvent(eventName, eventData) {
    if (!DEBUG)
        return;
    // 创建一个日志组，包含事件名称
    console.group(`🎮 事件: ${eventName}`);
    // 打印事件数据
    console.log('数据:', eventData);
    // 打印调用栈，便于追踪事件处理程序的来源
    console.trace('事件调用栈');
    // 结束日志组
    console.groupEnd();
}
/**
 * printElementTree 函数 - 可视化打印元素树结构
 *
 * 递归遍历并打印 React 元素树，使用缩进表示层级结构。
 * 这对于理解复杂组件的层次结构非常有帮助。
 *
 * @param element 要打印的 React 元素
 * @param depth 当前递归深度，用于缩进（默认为 0）
 *
 * @example
 * const app = <App />;
 * printElementTree(app);
 */
export function printElementTree(element, depth = 0) {
    if (!DEBUG)
        return;
    // 如果元素为空，打印 null 并返回
    if (!element) {
        console.log('null');
        return;
    }
    // 创建缩进，表示层级结构
    const indent = ' '.repeat(depth * 2);
    // 获取元素类型的可读表示
    const type = typeof element.type === 'function'
        ? element.type.name || '匿名函数'
        : element.type;
    // 打印当前元素
    console.log(`${indent}${type}`);
    // 如果有子元素，递归打印
    if (element.props && element.props.children) {
        // 将单个子元素转换为数组，统一处理
        const children = Array.isArray(element.props.children)
            ? element.props.children
            : [element.props.children];
        // 对每个子元素递归调用 printElementTree
        children.forEach((child) => {
            if (typeof child === 'object' && child !== null) {
                // 递归打印复杂子元素
                printElementTree(child, depth + 1);
            }
            else if (child !== null && child !== undefined) {
                // 打印简单子元素（文本、数字）
                console.log(`${indent}  "${child}"`);
            }
        });
    }
}
