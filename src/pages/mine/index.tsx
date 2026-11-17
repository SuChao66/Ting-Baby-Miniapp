import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Mine() {
  return (
    <View className="page">
      <View className="card">
        <Text className="title">我的</Text>
        <Text className="desc">mine 页 · M8 施工中</Text>
        <Text className="hint">用户信息与宝宝管理入口随后接入</Text>
      </View>
    </View>
  );
}
