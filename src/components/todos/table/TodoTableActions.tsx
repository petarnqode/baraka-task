import { ModalEnum } from "@/src/enum";
import { useAppDispatch } from "@/src/state/redux-hooks/reduxHooks";
import { setModal } from "@/src/state/shared/modals";
import { useCallback } from "react";
import TodoTableFilters from "@/src/components/todos/table/partial/filters/TodoTableFilters";
import MainButton from "@/src/components/buttons/MainButton";

const TodoTableActions = () => {
  const dispatch = useAppDispatch();

  const handleAddNew = useCallback(() => {
    dispatch(setModal(ModalEnum.ADD_TODO));
  }, []);

  return (
    <div className="w-full mb-3 flex gap-x-6 gap-y-4 flex-wrap">
      <TodoTableFilters />
      <div className="ml-auto">
        <MainButton text="Add Book" onClick={handleAddNew} />
      </div>
    </div>
  );
};

export default TodoTableActions;
