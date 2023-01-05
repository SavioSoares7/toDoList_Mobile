import { Text, View, Image } from "react-native";

import { styles } from "./style";
export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
}
