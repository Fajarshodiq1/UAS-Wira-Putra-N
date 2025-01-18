import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.task}>
      <View style={styles.rectangle}></View>
      <View>
        <Text style={styles.taskText}>{props.text}</Text>
        {props.date && <Text style={styles.dateText}>{props.date}</Text>}{" "}
        {/* Display date if available */}
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: "#FFF",
    width: "90%",
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  rectangle: {
    backgroundColor: "#3d85c6",
    width: 15,
    height: 15,
    marginRight: 8,
    marginLeft: 2,
  },
  taskText: {
    fontSize: 18,
    marginLeft: 12,
  },
  dateText: {
    fontSize: 14,
    marginLeft: 12,
    color: "#888", // Grey color for the date
  },
});
