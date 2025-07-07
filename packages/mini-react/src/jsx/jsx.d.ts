/**
 * @file packages/mini-react/src/jsx/jsx.d.ts
 * 
 * JSX 类型定义文件 - 为 TypeScript 提供 JSX 语法支持
 * 这个文件定义了 JSX 命名空间，使 TypeScript 能够正确处理 JSX 语法
 */

declare namespace JSX {
  /**
   * Element 接口 - JSX 元素的类型
   * 
   * 这个接口定义了 JSX 表达式的返回类型。
   * 在我们的实现中，它与 Mini React 的 Element 类型兼容。
   */
  interface Element {
    type: any;
    props: any;
    key?: string | number | null;
  }

  /**
   * ElementClass 接口 - 可作为 JSX 元素的类的类型
   * 
   * 这个接口定义了可以作为 JSX 元素使用的类的要求。
   * 在 React 中，这通常要求类有一个 render 方法。
   */
  interface ElementClass {
    render(): any;
  }

  /**
   * ElementAttributesProperty 接口 - 指定用于查找属性类型的属性名
   * 
   * 这个接口告诉 TypeScript 在哪里查找组件 props 的类型。
   * 在我们的实现中，我们使用 'props' 属性。
   */
  interface ElementAttributesProperty {
    props: {};
  }

  /**
   * IntrinsicElements 接口 - 内置 JSX 元素的类型
   * 
   * 这个接口定义了所有内置 HTML 元素的属性类型。
   * 它允许 TypeScript 检查 JSX 中使用的 HTML 元素的属性是否正确。
   */
  interface IntrinsicElements {
    [elemName: string]: any;
    div: any;
    span: any;
    h1: any;
    h2: any;
    h3: any;
    p: any;
    a: any;
    button: any;
    input: any;
    form: any;
    img: any;
    ul: any;
    ol: any;
    li: any;
    table: any;
    tr: any;
    td: any;
    th: any;
    thead: any;
    tbody: any;
    header: any;
    footer: any;
    main: any;
    section: any;
    article: any;
    nav: any;
  }
} 