/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

declare module '@mini-react/core' {
  export namespace jsx {
    export import createElement = MiniReact.createElement;
  }
} 