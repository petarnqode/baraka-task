const LOCAL_STORAGE_KEY = "todos";

export const saveTodosToLocalStorage = (todos: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodosFromLocalStorage = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse todos from localStorage", e);
    }
  }
  return [];
};
