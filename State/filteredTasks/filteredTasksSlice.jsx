import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
const filteredTasks = createSlice({
  name: "filteredTasks",
  initialState,
  reducers: {
    addInProgressTasks: (state, action) => {
      state.value = action.payload.filter((task) => task.status == false);
    },
    addDoneTasks: (state, action) => {
      state.value = action.payload.filter((task) => task.status == true);
    },
    emptyFilteredTasks: (state) => {
      state.value = [];
    },
    deleteFilteredTasksTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    changeFilteredTasksStatus: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task
      );
    },
  },
});

export const {
  addInProgressTasks,
  emptyFilteredTasks,
  addDoneTasks,
  deleteFilteredTasksTask,
  changeFilteredTasksStatus,
} = filteredTasks.actions;

export default filteredTasks.reducer;
