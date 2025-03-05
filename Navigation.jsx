import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TasksPages from "./Pages/TasksPages";
import AddTask from "./Pages/AddTask";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoTaskDetails from "./homeStack/ToDoTaskDetails";
import EditComponent from "./Pages/EditComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import QuotesComponent from "./Pages/QuotesComponent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="Task" component={TasksPages} />
      <Stack.Screen name="ToDoTaskDetails" component={ToDoTaskDetails} />
      <Stack.Screen name="EditTask" component={EditComponent} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          if (route.name == "Tasks") {
            return <FontAwesome name="list-alt" size={size} color={color} />;
          }
          if (route.name == "Add Task") {
            return <MaterialIcons name="add-task" size={size} color={color} />;
          }
          if (route.name == "Quotes") {
            return (
              <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            );
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tasks" component={StackGroup} />
      <Tab.Screen name="Add Task" component={AddTask} />
      <Tab.Screen name="Quotes" component={QuotesComponent} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/To-Do-Logo 1.png")}
            resizeMode="stretch"
          />
        </View>

        <BottomTab />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1ECE6",
    width: "100%",
    padding: 10,
  },
  image: {
    width: 138,
    height: 36,
  },
});
