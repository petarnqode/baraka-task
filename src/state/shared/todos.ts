import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State as AppState } from "@/src/state/store";
import { ITodo } from "@/src/interfaces";
import { TaskStatusEnum } from "@/src/enum";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/src/utils/local-storage";

const LOCAL_STORAGE_KEY = "todos";

type State = {
  todos: ITodo[];
};

const initialState: State = {
  todos: loadFromLocalStorage(LOCAL_STORAGE_KEY) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    initializeTodos: () => {
      const restored = loadFromLocalStorage(LOCAL_STORAGE_KEY);
      return { todos: restored || [] };
    },

    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.todos);
    },

    addNewTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.todos);
    },

    removeTodoById: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.todos);
    },

    setTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.status =
            todo.status === TaskStatusEnum.ACTIVE
              ? TaskStatusEnum.COMPLETED
              : TaskStatusEnum.ACTIVE;
          return todo;
        }

        return todo;
      });
      saveToLocalStorage(LOCAL_STORAGE_KEY, state.todos);
    },
  },
});

export const {
  initializeTodos,
  setTodos,
  addNewTodo,
  setTodoStatus,

  removeTodoById,
} = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: AppState) => state.todos;
