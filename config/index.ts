import path from "node:path";
import { defineConfig, type UserConfigExport } from "@tarojs/cli";
import devConfig from "./dev";
import prodConfig from "./prod";

/**
 * Taro 编译配置
 * - 编译目标 weapp（webpack5 runner）
 * - 别名 @ → src（对齐 H5）
 * - 环境变量：.env.* 中 TARO_APP_ 前缀变量自动注入 process.env
 * - designWidth 750：样式统一手写 rpx（375 设计稿 1px = 2rpx）
 */
export default defineConfig<"webpack5">(async (merge, { mode }) => {
  const config: UserConfigExport<"webpack5"> = {
    projectName: "ting-baby-miniapp",
    date: "2026-11-13",
    // designWidth=375：样式直接写设计稿 px（375 稿），pxtransform 编译期 ×2 转 rpx（16px → 32rpx）
    designWidth: 375,
    deviceRatio: {
      375: 2,
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
    },
    sourceRoot: "src",
    outputRoot: "dist",
    alias: {
      "@": path.resolve(__dirname, "..", "src"),
    },
    plugins: [],
    defineConstants: {},
    copy: {
      patterns: [],
      options: {},
    },
    framework: "react",
    compiler: "webpack5",
    // 持久化缓存：watch 增量编译提速（配合开发者工具热重载实现准 HMR 体验）
    cache: {
      enable: true,
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {},
        },
        cssModules: {
          enable: false,
        },
      },
    },
    h5: {},
  };

  if (mode === "development") {
    return merge({}, config, devConfig(config));
  }
  return merge({}, config, prodConfig(config));
});
