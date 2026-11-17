import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Ai() {
  return (
    <View className="page">
      <View className="card">
        <Text className="title">AI 咨询</Text>
        <Text className="desc">ai 页 · M10 施工中</Text>
        <Text className="hint">AI 聊天页（SSE 流式）随后迁移</Text>
      </View>
    </View>
  );
}
