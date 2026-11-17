import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Home() {
  return (
    <View className="page">
      <View className="card">
        <Text className="title">汀宝宝记忆</Text>
        <Text className="desc">home 页 · M8 施工中</Text>
        <Text className="hint">完整版 RecordList 将在 M9 迁移</Text>
      </View>
    </View>
  );
}
