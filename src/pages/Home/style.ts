import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  form: {
    marginTop: -50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  input: {
    color: "#fff",
    padding: 16,
    marginRight: 4,
    height: 56,
    backgroundColor: "#262626",
    flex: 1,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  buttonName: {
    color: "#fff",
  },

  containerTask: {
    marginTop: 32,
    alignItems: "center",
  },
  tasksConcluded: {
    color: "#fff",
    backgroundColor: "#262626",
    padding: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  tasksView: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  notification: {
    padding: 5,
    color: "#eee",
    fontWeight: "bold",
    textAlign: "center",
  },
});
