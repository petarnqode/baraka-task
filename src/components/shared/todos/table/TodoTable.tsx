import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { selectTodos } from "@/src/state/shared/todos";
import TodoTableHeader from "@/src/components/shared/todos/table/partial/TodoTableHeading";
import TodoTableRow from "./partial/TodoTableRow";
import { selectFilters } from "@/src/state/shared/filters";

const TodoTable = () => {
  const { todos } = useAppSelector(selectTodos);
  const { activeFilter } = useAppSelector(selectFilters);

  const filterTodos = () => {
    if (activeFilter === "ALL") {
      return todos;
    }
    return todos.filter((todo) => todo.status === activeFilter);
  };

  return (
    <div className="w-full h-full bg-white rounded-sm border-1 border-light-grey-alt border-solid p-6 overflow-y-scroll">
      <TodoTableHeader />
      {filterTodos().map((todo) => (
        <TodoTableRow todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoTable;
