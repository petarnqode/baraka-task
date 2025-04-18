import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { selectFilters } from "@/src/state/shared/filters";
import TodoTableSingleFilter from "@/src/components/shared/todos/table/partial/filters/TodoTableSingleFilter";

const TodoTableFilters = () => {
  const { filters } = useAppSelector(selectFilters);

  return (
    <div className="flex gap-4 mt-auto">
      {filters.map((filter) => (
        <TodoTableSingleFilter filter={filter} key={filter} />
      ))}
    </div>
  );
};

export default TodoTableFilters;
