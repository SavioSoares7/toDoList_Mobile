import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type props = {
  name: string;
  taskDelete: () => void;
};

export function Task({ name, taskDelete }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={taskDelete}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
