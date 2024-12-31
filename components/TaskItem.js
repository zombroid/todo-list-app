import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.text}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskText: {
    fontSize: 16,
  },
});
