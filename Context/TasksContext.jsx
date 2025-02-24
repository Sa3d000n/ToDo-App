import { createContext, useState } from "react";

export const TasksContext = createContext();

export default function TasksProvider(props) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Complete React Native project",
      description:
        "Finish all remaining features and ensure the app is production-ready.",
      status: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Review pull requests",
      description: "Go through open PRs and provide feedback or approve them.",
      status: true,
      priority: "Medium",
    },
    {
      id: "3",
      title: "Update project documentation",
      description:
        "Ensure all documentation is up-to-date with the latest changes.",
      status: false,
      priority: "Low",
    },
    {
      id: "4",
      title: "Fix UI bugs in mobile app",
      description:
        "Address reported UI issues and improve the user experience.",
      status: false,
      priority: "High",
    },
    {
      id: "5",
      title: "Write unit tests for components",
      description:
        "Add unit tests to ensure code reliability and maintainability.",
      status: true,
      priority: "Medium",
    },
    {
      id: "6",
      title: "Optimize app performance",
      description: "Identify and resolve performance bottlenecks in the app.",
      status: false,
      priority: "High",
    },
    {
      id: "7",
      title: "Refactor authentication module",
      description: "Improve the authentication flow and code structure.",
      status: false,
      priority: "Medium",
    },
    {
      id: "8",
      title: "Deploy app to Play Store",
      description: "Prepare and publish the app on the Google Play Store.",
      status: true,
      priority: "High",
    },
    {
      id: "9",
      title: "Research new libraries for state management",
      description:
        "Explore and evaluate state management libraries like Zustand or Recoil.",
      status: true,
      priority: "Low",
    },
    {
      id: "10",
      title: "Prepare a presentation on React Native best practices",
      description: "Create a detailed presentation to share with the team.",
      status: false,
      priority: "Medium",
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TasksContext.Provider>
  );
}
