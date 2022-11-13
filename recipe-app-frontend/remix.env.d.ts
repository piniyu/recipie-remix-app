/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare global {
  namespace NodeJs {
    interface ProcessEnv {
      ENV: 'production' | 'development'
    }
  }
}

export {}
