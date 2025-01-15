import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updates); 
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
