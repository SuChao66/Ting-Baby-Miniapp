import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Login() {
  return (
    <View className="page">
      <View className="card">
        <Text className="title">登录</Text>
        <Text className="desc">login 页 · M8 施工中</Text>
        <Text className="hint">
          账号密码表单（encrypt + /api/v1/user/login）随后接入
        </Text>
      </View>
    </View>
  );
}
