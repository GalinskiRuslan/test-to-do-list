import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    toDoList: [],
    progress: [],
  },
  reducers: {
    addedToDos(state, action) {
      state.toDoList.push(action.payload);
    },
    removeToDos(state, action) {
      state.toDoList.splice(action.payload.id, 1);
    },
    progressStart(state, action) {
      state.progress.push(action.payload);
    },
    progressUp(state, action) {
      state.progress[action.payload.index].push(action.payload.progress);
    },
    progressDown(state, action) {
      state.progress[action.payload.index].pop();
    },
  },
});

export default toolkitSlice.reducer;
export const {
  addedToDos,
  removeToDos,
  progressStart,
  progressUp,
  progressDown,
} = toolkitSlice.actions;
