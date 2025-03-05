import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TasksContext } from "../../Context/TasksContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, deleteTask } from "../../State/Tasks/tasksSlice";
import { changeFilteredTasksStatus, deleteFilteredTasksTask } from "../../State/filteredTasks/filteredTasksSlice";
const windowWidth = Dimensions.get("window").width;

export default function ToDoTaskCard({ item }) {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
function handleDelete(id){
  dispatch(deleteTask(id))
  dispatch(deleteFilteredTasksTask(id))
}
function handleStatusChanging(id){
  dispatch(changeStatus(id))
  dispatch(changeFilteredTasksStatus(id))
}
  return (
    <View style={styles.taskView}>
      <Pressable
        onPress={() => {
          navigate("ToDoTaskDetails", { item });
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
      </Pressable>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <Pressable
          onPress={() => {
            handleStatusChanging(item.id);
          }}
        >
          {item.status ? (
            <FontAwesome name="check-circle" size={24} color="green" />
          ) : (
            <Feather name="circle" size={24} color="black" />
          )}
        </Pressable>
        <Pressable onPress={() =>handleDelete(item.id) }>
          <AntDesign name="delete" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskView: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    backgroundColor: "#F1ECE6",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },

    shadowRadius: 10,

    elevation: 10,
    marginVertical: 10,
    width: windowWidth * 0.9,
    flexWrap: "wrap",
  },
});
