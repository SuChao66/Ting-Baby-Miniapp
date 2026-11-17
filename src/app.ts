import type { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.scss";

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 即当前页面，由 Taro 页面栈驱动渲染
  return children;
}

export default App;
