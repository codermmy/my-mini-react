/**
 * @file packages/mini-react/src/core/Component.ts
 *
 * 提供Component基类，用于创建类组件
 */
import { debugLog } from '@mini-react/shared';
/**
 * Component 类 - 所有类组件的基类
 *
 * 为了创建有状态组件，用户需要继承这个类并实现 render 方法。
 * 这个类提供了状态管理和生命周期功能的基础结构。
 *
 * @example
 * class Welcome extends Component {
 *   render() {
 *     return <h1>Hello, {this.props.name}</h1>;
 *   }
 * }
 */
export class Component {
    /**
     * 组件构造函数
     * 初始化组件实例，存储传入的 props
     *
     * @param props 从父组件传递的属性
     */
    constructor(props) {
        /**
         * 组件的 props（从父组件传递的属性）
         */
        Object.defineProperty(this, "props", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        debugLog('Component', `${this.constructor.name} 构造函数被调用`, props);
        this.props = props;
    }
    /**
     * setState 方法 - 更新组件状态
     *
     * 在实际实现中，这个方法会：
     * 1. 合并新的状态到现有状态
     * 2. 将组件标记为需要重新渲染
     * 3. 触发重新渲染流程
     *
     * @param partialState 部分状态对象，将与现有状态合并
     */
    setState(partialState) {
        // 用户将自行实现状态更新逻辑
        debugLog('Component', `${this.constructor.name}.setState 被调用`, partialState);
    }
    /**
     * render 方法 - 返回要渲染的元素
     *
     * 这是一个抽象方法，子类必须实现它。
     * 返回的元素描述了组件的 UI 结构。
     *
     * @returns 返回表示组件 UI 的 React 元素
     * @throws 如果子类没有实现这个方法，则抛出错误
     */
    render() {
        // 子类会重写这个方法
        debugLog('Component', 'Component.render 被调用（基类）');
        throw new Error('Component subclasses must implement render()');
    }
}
