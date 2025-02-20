import { useState } from "react";
import {
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Complete React Native project" },
    { id: "2", title: "Review pull requests" },
    { id: "3", title: "Update project documentation" },
    { id: "4", title: "Fix UI bugs in mobile app" },
    { id: "5", title: "Write unit tests for components" },
    { id: "6", title: "Optimize app performance" },
    { id: "7", title: "Refactor authentication module" },
    { id: "8", title: "Deploy app to Play Store" },
    { id: "9", title: "Research new libraries for state management" },
    {
      id: "10",
      title: "Prepare a presentation on React Native best practices",
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/To-Do-Logo 1.png")}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.AddTaskView}>
        <TextInput style={styles.addInput} placeholder="Enter A New Task" />
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filtrationButtonsView}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.addText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.addText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.addText}>Done</Text>
        </TouchableOpacity>
      </View>
      
        <View style={styles.tasksView}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.taskView}>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: "center", // Center the image horizontally
    justifyContent: "center", // Center the image vertically
    backgroundColor: "#F1ECE6",
    width: "100%",
    padding: 10,
  },
  image: {
    width: 138,
    height: 36,
  },
  AddTaskView: {
    display: "flex",
    marginHorizontal: "auto",
    marginVertical: 10,
    flexDirection: "row",
  },
  addText: {
    fontSize: 14,
    color: "white",
  },
  addButton: {
    backgroundColor: "#76b7cd",
    padding: 10,
    display: "flex",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  addInput: {
    backgroundColor: "#F1ECE6",
    width: 250,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  tasksView: {
    width: "80%",
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  taskView: {
    padding: 20,
    maxHeight: "90%",
    backgroundColor: "#F1ECE6",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },

    shadowRadius: 10,

    elevation: 10,
    marginVertical: 10,
  },
  filtrationButtonsView: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterButton: {
    padding: 10,
    minWidth: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#76b7cd",
    borderColor: "black",
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
});
