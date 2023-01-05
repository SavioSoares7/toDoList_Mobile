import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";

import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.length <= 0) {
      return Alert.alert("Aviso", "Escreva sua tarefa❌", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    }
    const taskVerification = tasks.findIndex((item) => item == task);
    if (taskVerification === 0) {
      return Alert.alert("Aviso", "Task com o mesmo nome já adicionado❌", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    }

    setTasks((prev) => [...prev, task]);
  }

  function deleteTask(task: string) {
    const newListTasks = tasks.filter((item) => item != task);
    setTasks(newListTasks);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          placeholder="Digite sua tarefa"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={(e) => setTask(e)}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonName}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerTask}>
        <Text style={styles.tasksConcluded}>Tarefas {tasks.length}</Text>
      </View>

      <FlatList
        style={styles.tasksView}
        data={tasks}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.notification}>
              Você ainda não tem tarefas cadastradas.
            </Text>
          </>
        )}
        renderItem={({ item }) => {
          return (
            <Task taskDelete={() => deleteTask(item)} name={item} key={item} />
          );
        }}
      />
    </View>
  );
}
