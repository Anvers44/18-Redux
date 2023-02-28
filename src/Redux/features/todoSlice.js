import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, task: "Welcome", done: false },];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    addTodo: (state, action) => {
     const newTask={
       id:Date.now(),
       task:action.payload,
       done:false,
     };
     state.push(newTask);
    },
    toggleTask: (state, action) => {
       const task = state.find((t)=> t.id===action.payload)
        console.log(task.done)
        task.done= !task.done
        console.log(task.done)
    },

    deleteTodo: (state, action) => {
        state= state.filter((t)=>t.id !== action.payload)
        return state
    },

  },
});
export const { addTodo, deleteTodo, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;
