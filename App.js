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
import {Provider} from "react-redux"
import  store  from "./State/store";

export default function App() {
  return (
    <Provider store={store}>
    <TasksProvider>
      <Navigation />
    </TasksProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
