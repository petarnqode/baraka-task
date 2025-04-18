import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@/src/interfaces";
import { State as AppState } from "@/src/state/store";
import { ITodo } from "@/src/interfaces";

type State = {
  todos: ITodo[];
  toEditTodo: Nullable<ITodo>;
};

const initialState: State = {
  todos: [],
  toEditTodo: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initializeTodos: () => initialState,

    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },

    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },

    setToEditTodo: (state, action: PayloadAction<ITodo>) => {
      state.toEditTodo = action.payload;
    },

    removeToEditTodo: (state) => {
      state.toEditTodo = null;
    },

    removeTodoById: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  initializeTodos,
  setTodos,
  addNewTodo,
  setToEditTodo,
  removeToEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: AppState) => state.todos;
