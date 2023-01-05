import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    backgroundColor: "#262626",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 8,
    padding: 20,
  },
  itemText: {
    textAlign: "justify",
    marginRight: 20,
    color: "#fff",
    maxWidth: "60%",
  },
  button: {
    backgroundColor: "#E25858",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});
