/**
 * @file packages/mini-react-dom/src/index.ts
 *
 * Mini React DOM 包 - 负责将虚拟DOM渲染到真实DOM
 */
import { debugLog } from '@mini-react/shared';
/**
 * 将虚拟DOM元素渲染到DOM容器中
 *
 * @param element 要渲染的虚拟DOM元素
 * @param container 目标DOM容器
 */
function render(element, container) {
    debugLog('ReactDOM', '渲染开始', { element, container });
    if (!container) {
        debugLog('ReactDOM', '渲染错误: 容器不能为null', null);
        return;
    }
    // 简单实现：直接创建DOM元素并添加到容器
    const dom = createDom(element);
    container.innerHTML = ''; // 清空容器
    container.appendChild(dom);
    debugLog('ReactDOM', '渲染完成', container);
}
/**
 * 从虚拟DOM创建真实DOM元素
 *
 * @param element 虚拟DOM元素
 * @returns 创建的DOM节点
 */
function createDom(element) {
    debugLog('ReactDOM', '创建DOM元素', element);
    // 处理文本节点
    if (typeof element === 'string') {
        return document.createTextNode(element);
    }
    // 处理数字节点
    if (typeof element === 'number') {
        return document.createTextNode(String(element));
    }
    // 处理null或undefined
    if (element == null) {
        return document.createTextNode('');
    }
    // 处理函数组件
    if (typeof element.type === 'function') {
        debugLog('ReactDOM', '渲染函数组件', element.type.name || '匿名组件');
        const componentElement = element.type(element.props);
        return createDom(componentElement);
    }
    // 处理Fragment
    if (element.type === Symbol.for('Fragment')) {
        const fragment = document.createDocumentFragment();
        const children = element.props.children || [];
        // 渲染所有子元素
        (Array.isArray(children) ? children : [children]).forEach((child) => {
            if (child != null) {
                fragment.appendChild(createDom(child));
            }
        });
        return fragment;
    }
    // 处理普通DOM元素
    try {
        const domElement = document.createElement(element.type);
        // 设置属性
        const { children, ...props } = element.props || {};
        Object.entries(props).forEach(([name, value]) => {
            // 处理事件
            if (name.startsWith('on') && typeof value === 'function') {
                const eventName = name.toLowerCase().substring(2);
                domElement.addEventListener(eventName, value);
            }
            // 处理样式
            else if (name === 'style') {
                if (typeof value === 'string') {
                    domElement.setAttribute('style', value);
                }
                else if (typeof value === 'object') {
                    Object.entries(value).forEach(([styleName, styleValue]) => {
                        // @ts-ignore
                        domElement.style[styleName] = styleValue;
                    });
                }
            }
            // 处理className
            else if (name === 'className') {
                domElement.setAttribute('class', value);
            }
            // 处理其他属性
            else {
                domElement.setAttribute(name, value);
            }
        });
        // 处理子元素
        const childrenArray = Array.isArray(children) ? children : children ? [children] : [];
        childrenArray.forEach((child) => {
            if (child != null) {
                domElement.appendChild(createDom(child));
            }
        });
        return domElement;
    }
    catch (error) {
        debugLog('ReactDOM', 'DOM创建错误', error);
        return document.createTextNode(`错误: ${error.message}`);
    }
}
/**
 * 从DOM中卸载组件
 *
 * @param container 包含已挂载组件的DOM容器
 * @returns 布尔值，表示是否有组件被卸载
 */
function unmountComponentAtNode(container) {
    if (!container) {
        return false;
    }
    const hadChild = container.hasChildNodes();
    container.innerHTML = '';
    return hadChild;
}
// 导出API
const MiniReactDOM = {
    render,
    unmountComponentAtNode
};
export default MiniReactDOM;
