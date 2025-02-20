/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SWELL_STORE_ID: string
    readonly VITE_SWELL_PUBLIC_TOKEN: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }