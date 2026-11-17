/// <reference path="../node_modules/@tarojs/plugin-platform-weapp/types/shims-weapp.d.ts" />

declare module "*.png" {
  const path: string;
  export default path;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.jpeg" {
  const path: string;
  export default path;
}

declare module "*.gif" {
  const path: string;
  export default path;
}

declare module "*.scss";

/**
 * Taro 环境变量类型（.env.* 中 TARO_APP_ 前缀变量）
 * 对应 H5 的 import.meta.env.VITE_XXX（计划书 0.2 翻译词典）
 */
declare const process: {
  env: {
    NODE_ENV: "development" | "production";
    TARO_ENV: "weapp" | "swan" | "tt" | "qq" | "alipay" | "h5" | "rn";
    TARO_APP_API_ENVIRONMENT: string;
    TARO_APP_SECRET_KEY: string;
    TARO_APP_BASE_URL: string;
  };
};
