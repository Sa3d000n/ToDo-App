import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { editTask } from "../State/Tasks/tasksSlice";
import { useDispatch } from "react-redux";
const windowWidth = Dimensions.get("window").width;

const EditComponent = () => {
  const navigator = useNavigation();
  const { params } = useRoute();
  const { id, title, description, priority, status } = params.item;
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskPriority, setTaskPriority] = useState(priority);
  const [taskStatus, setTaskStatus] = useState(status);
  
  const dispatch = useDispatch();
  function handleEditing(id) {
    dispatch(
      editTask({ id, taskTitle, taskDescription, taskPriority, taskStatus })
    );

    navigator.navigate("Task");
  }
  return (
    <View style={styles.AddTaskView}>
      <View>
        <Text style={styles.headLine}>Edit Task</Text>
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
            selectedValue={taskPriority}
            style={styles.picker}
            onValueChange={(itemValue) => setTaskPriority(itemValue)}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>
      </View>
      <View>
        <Text style={styles.pickerText}>Status :</Text>
        <View style={styles.priorityContainer}>
          <Picker
            selectedValue={taskStatus ? "Done" : "InProgress"}
            style={styles.picker}
            onValueChange={(itemValue) =>
              itemValue == "Done" ? setTaskStatus(true) : setTaskStatus(false)
            }
          >
            <Picker.Item label="Done" value="Done" />
            <Picker.Item label="In Progress" value="InProgress" />
          </Picker>
        </View>
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          onPress={() => handleEditing(id)}
        >
          <Text style={styles.addText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditComponent;
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
    width: windowWidth * 0.8,
    borderRadius: 10,
  },
  addText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
