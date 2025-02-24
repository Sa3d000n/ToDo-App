import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, FlatList, ScrollView } from "react-native";
import ToDoTaskCard from "../Components/ToDoTaskCard/ToDoTaskCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksContext } from "../Context/TasksContext";
const windowWidth = Dimensions.get("window").width;
export default function TasksPages() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [emptyFilterText, setEmptyFilterText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  function handleInProgressFilter() {
    setFilteredTasks([]);
    setEmptyFilterText("");
    setActiveFilter("InProgress");

    const newFilteredTasks = tasks.filter((task) => task.status == false);
    if (newFilteredTasks.length == 0) {
      return setEmptyFilterText("No In Progress Tasks To Be Shown");
    }
    setFilteredTasks(newFilteredTasks);
  }
  function handleDoneFilter() {
    setFilteredTasks([]);
    setEmptyFilterText("");
    setActiveFilter("Done");
    const newFilteredTasks = tasks.filter((task) => task.status == true);
    if (newFilteredTasks.length == 0) {
      return setEmptyFilterText("No Done Tasks To Be Shown");
    }
    setFilteredTasks(newFilteredTasks);
  }
  function handleAllFilter() {
    setFilteredTasks([]);
    setEmptyFilterText("");
    setActiveFilter("All");
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headLine}>Tasks</Text>
      </View>
      <View style={styles.filtrationButtonsView}>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor:
              activeFilter === "All"
                ? "black"
                : styles.filterButton.backgroundColor,
          }}
          onPress={() => handleAllFilter()}
        >
          <Text style={styles.addText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor:
              activeFilter === "InProgress"
                ? "black"
                : styles.filterButton.backgroundColor,
          }}
          onPress={() => handleInProgressFilter()}
        >
          <Text style={styles.addText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.filterButton,
            backgroundColor:
              activeFilter === "Done"
                ? "black"
                : styles.filterButton.backgroundColor,
          }}
          onPress={() => handleDoneFilter()}
        >
          <Text style={styles.addText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksView}>
        {emptyFilterText ? (
          <Text style={{ ...styles.headLine, marginTop: 20 }}>
            {emptyFilterText}
          </Text>
        ) : (
          <FlatList
            contentContainerStyle={{ padding: 15 }}
            data={filteredTasks.length > 0 ? filteredTasks : tasks}
            renderItem={({ item }) => <ToDoTaskCard item={item} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addText: { color: "white" },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // marginBottom: 80,
    width: windowWidth,
  },

  headLine: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  tasksView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
   
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
