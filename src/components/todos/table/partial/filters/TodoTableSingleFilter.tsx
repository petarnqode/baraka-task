import { FilterType } from "@/src/interfaces";
import {
  useAppDispatch,
  useAppSelector,
} from "@/src/state/redux-hooks/reduxHooks";
import { selectFilters, setFilter } from "@/src/state/shared/filters";
import { useCallback } from "react";

type TodoTableSingleFilterProps = {
  filter: FilterType;
};

const TodoTableSingleFilter = ({ filter }: TodoTableSingleFilterProps) => {
  const { activeFilter } = useAppSelector(selectFilters);
  const dispatch = useAppDispatch();

  const handleSetActiveFilter = useCallback(() => {
    dispatch(setFilter(filter));
  }, []);

  return (
    <button
      onClick={handleSetActiveFilter}
      className={`font-poppins border-1 border-solid ${
        activeFilter == filter
          ? "bg-light-grey-transparent border-lighy-grey"
          : "bg--transparent border-transparent"
      } flex items-center justify-center rounded-xs text-dark-grey text-sm h-7 px-2`}
    >
      {filter}
    </button>
  );
};

export default TodoTableSingleFilter;
