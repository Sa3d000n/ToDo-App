import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import React, { useContext, useState } from "react";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TasksContext } from "../Context/TasksContext";

const windowWidth = Dimensions.get("window").width;

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const navigation = useNavigation();
  const { tasks, setTasks } = useContext(TasksContext);

  const handleReset = () => {
    setTaskTitle("");
    setTaskDescription("");
    setPriority("Low");
  };
  const handleAddTask = async () => {
    if (!taskTitle.trim()) {
      alert("Please enter a task title!");
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskDescription,
      priority: priority,
      status: false,
    };

    setTasks((pervTask) => [newTask, ...pervTask]);
    navigation.navigate("Tasks");
    handleReset();
  };

  return (
    <View style={styles.AddTaskView}>
      <View>
        <Text style={styles.headLine}>Add New Task</Text>
      </View>

      <TextInput
        style={styles.addInput}
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TextInput
        style={styles.addInput}
        placeholder="Add a description"
        value={taskDescription}
        onChangeText={setTaskDescription}
        multiline
      />
      <View>
        <Text style={styles.pickerText}>Priority :</Text>
        <View style={styles.priorityContainer}>
          <Picker
            selectedValue={priority}
            onValueChange={(itemValue) => setPriority(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={handleAddTask}
        >
          <Text style={styles.addText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={handleReset}
        >
          <Text style={styles.addText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AddTaskView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginHorizontal: "auto",
    padding: 20,
  },
  headLine: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  addInput: {
    backgroundColor: "#F1ECE6",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    width: windowWidth * 0.9,
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  priorityContainer: {
    backgroundColor: "#F1ECE6",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    width: windowWidth * 0.9,
  },
  picker: {
    width: "100%",
  },
  pickerText: {
    fontSize: 20,
    margin: 5,
  },
  addButton: {
    backgroundColor: "#76b7cd",
    padding: 10,
    display: "flex",
    width: windowWidth * 0.4,
    borderRadius: 10,
  },
  addText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
