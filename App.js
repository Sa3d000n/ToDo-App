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
import ToDoTaskCard from "./Components/ToDoTaskCard/ToDoTaskCard";
import AddTask from "./Pages/AddTask";
import Navigation from "./Navigation";
import TasksPages from "./Pages/TasksPages";
import TasksProvider, { TasksContext } from "./Context/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <Navigation />
    </TasksProvider>
  );
}

const styles = StyleSheet.create({});
