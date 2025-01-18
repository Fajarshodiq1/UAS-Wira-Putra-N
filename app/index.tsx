import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Task from "./Components/task";
import React, { useState } from "react";

export default function Index() {
  const [task, setTask] = useState();
  const [date, setDate] = useState(); // State for the date
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, { task, date }]); // Save task with date
    setTask(null);
    setDate(null); // Clear the date input
  };

  const completeTask = (index) => {
    const itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Daily Planner</Text>
      </View>

      <View style={styles.taskWrapper}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item.task} date={item.date} />
            </TouchableOpacity>
          );
        })}
        <Task />
      </View>

      <View style={styles.inputSection}>
        <KeyboardAvoidingView style={styles.inputView}>
          {/* Task Input */}
          <TextInput
            placeholder="Enter New Task"
            value={task}
            style={styles.input}
            onChangeText={(text) => setTask(text)}
          />

          {/* Date Input */}
          <TextInput
            placeholder="Enter Date (YYYY-MM-DD)"
            value={date}
            style={styles.input}
            onChangeText={(text) => setDate(text)}
          />

          {/* Add Button */}
          <TouchableOpacity style={styles.addBtn} onPress={() => handleTask()}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#cfe2f3",
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  taskWrapper: {
    marginTop: 40,
    marginLeft: 30,
  },
  inputSection: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFF",
    fontSize: 18,
    padding: 15,
    marginLeft: 30,
    borderRadius: 10,
    maxWidth: "80%",
    width: 250,
  },
  addBtn: {
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: "50%",
  },
  addText: {
    fontSize: 18,
  },
});
