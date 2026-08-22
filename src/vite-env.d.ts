/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_ID?: string;
  readonly VITE_UMAMI_SRC?: string;
  readonly VITE_UMAMI_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
