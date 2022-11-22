/// <reference types="vite-electron-plugin/electron-env.d.ts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    VITE_DEV_SERVER_URL: string
  }
}