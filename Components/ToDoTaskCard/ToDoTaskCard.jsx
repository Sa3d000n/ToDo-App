import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TasksContext } from "../../Context/TasksContext";
import AntDesign from "@expo/vector-icons/AntDesign";
const windowWidth = Dimensions.get("window").width;

export default function ToDoTaskCard({ item }) {
  const [status, setStatus] = useState(item.status);
  const { tasks, setTasks } = useContext(TasksContext);

  const { navigate } = useNavigation();
  function handleStatus(id) {
    setStatus((perv) => !perv);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }
  return (
    <View style={styles.taskView}>
      <Pressable
        onPress={() => {
          navigate("ToDoTaskDetails", { item });
        }}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" >
          {item.title}
        </Text>
      </Pressable>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <Pressable
          onPress={() => {
            handleStatus(item.id);
          }}
        >
          {status ? (
            <FontAwesome name="check-circle" size={24} color="green" />
          ) : (
            <Feather name="circle" size={24} color="black" />
          )}
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
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
    flexWrap:"wrap"
  },
});
