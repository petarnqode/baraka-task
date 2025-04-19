import { ITodo } from "@/src/interfaces";
import TodoTableStatus from "./TodoTableStatus";
import { Check, Trash } from "@/src/components/icons/general";
import { useAppDispatch } from "@/src/state/redux-hooks/reduxHooks";
import { removeTodoById, setTodoStatus } from "@/src/state/shared/todos";
import customToast from "@/src/components/shared/Toast";

type TodoTableRowProps = {
  todo: ITodo;
};

const TodoTableRow = ({ todo }: TodoTableRowProps) => {
  const { dueDate, name, status, id } = todo;
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(setTodoStatus(id));
    customToast.warning("Book is updated");
  };

  const handleDelete = () => {
    dispatch(removeTodoById(id));
    customToast.error("Book is deleted");
  };

  return (
    <div className="grid grid-cols-4 border-b-1 border-b-light-grey-alt border-solid px-4 pb-3 pt-4 items-center">
      <p className="font-poppins text-sm text-black font-normal truncate">
        {name}
      </p>
      <p className="font-poppins text-sm text-black font-normal truncate">
        {dueDate.toLocaleString()}
      </p>
      <div className="pr-2">
        <TodoTableStatus status={status} />
      </div>
      <div className="flex gap-4 font-poppins text-sm text-black font-normal truncate">
        <Trash className="cursor-pointer" onClick={handleDelete} />
        <Check className="cursor-pointer" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default TodoTableRow;
