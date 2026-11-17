/**
 * 页面注册表（对应 H5 router/index.ts 路由表）
 * 注意：不 import @tarojs/taro（defineAppConfig）——Taro CLI 用 esbuild 解析本文件时
 * 会连带打包 @tarojs/runtime，其顶层常量（ENABLE_INNER_HTML 等）在 CLI 阶段未注入，
 * 直接 ReferenceError（Taro 4.3.2 已知坑），纯对象导出即可。
 *
 * 主应用入口三页：home/ai/mine（对应 H5 布局）
 * 登录页：login
 *
 * tabBar：图标资源未就绪，先启用文字版（iconPath 为可选字段，原生支持）。
 * 图标到位后：放 6 张 81x81 png 到 src/assets/tabbar/（各 tab 的 selected/unselected 两态），
 * 再给 list 各项补 iconPath/selectedIconPath 即可（不支持网络图片与 base64，仅本地资源）。
 * AI 凸起图标（中央凸起胶囊）原生 tabBar 不支持，计划书约定 M8 先用普通图标，凸起效果待 M10 评估 custom-tab-bar。
 *
 * 注意：tabBar 页面之间跳转必须用 Taro.switchTab，navigateTo 无法打开 tabBar 页。
 */
export default {
  pages: [
    "pages/home/index",
    "pages/login/index",
    "pages/ai/index",
    "pages/mine/index",
  ],
  tabBar: {
    color: "#999999",
    selectedColor: "#ff8fa3",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/ai/index",
        text: "AI",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff0f3",
    navigationBarTitleText: "汀宝宝记忆",
    navigationBarTextStyle: "black",
  },
};
