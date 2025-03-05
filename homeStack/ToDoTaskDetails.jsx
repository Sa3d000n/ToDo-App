import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TasksContext } from "../Context/TasksContext";
import { useDispatch } from "react-redux";
import { deleteTask } from "../State/Tasks/tasksSlice";

const ToDoTaskDetails = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { params } = route;
  const navigation = useNavigation();
  const { item } = params;
  const { title, description, id, status, priority } = params.item;

  function handleDelete(id) {
    dispatch(deleteTask(id));
    navigation.goBack();
  }
  let color;
  if (priority == "Low") {
    color = "green";
  } else if (priority == "Medium") {
    color = "orange";
  } else if (priority == "High") {
    color = "red";
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Task Details</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        {description && (
          <View style={styles.descriptionContainer}>
            <Icon
              name="description"
              size={20}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.description}>{description}</Text>
          </View>
        )}

        {/* Status Section */}
        <View style={styles.infoContainer}>
          <Icon
            name="check-circle"
            size={20}
            color={status ? "#4CAF50" : "#FF9800"}
          />
          <Text
            style={[styles.status, { color: status ? "#4CAF50" : "#FF9800" }]}
          >
            {status ? "Completed" : "In Progress"}
          </Text>
        </View>

        {/* Priority Section */}
        <View style={styles.infoContainer}>
          <Icon name="priority-high" size={20} color={color} />
          <Text style={{ ...styles.priority, color: color }}>
            Priority: {priority}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => navigation.navigate("EditTask", { item })}
          >
            <Icon name="edit" size={18} color="#FFF" />
            <Text style={styles.buttonText}>Edit Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => handleDelete(id)}
          >
            <Icon name="delete" size={18} color="#FFF" />
            <Text style={styles.buttonText}>Delete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ToDoTaskDetails;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F1ECE6",
    paddingVertical: 20,
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
    flexShrink: 1,
  },
  icon: {
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  priority: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "48%",
  },
  editButton: {
    backgroundColor: "#4CAF50",
  },
  deleteButton: {
    backgroundColor: "#FF4444",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
