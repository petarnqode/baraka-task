import TodoTable from "@/src/components/todos/table/TodoTable";
import TodoTableActions from "@/src/components/todos/table/TodoTableActions";

const TodoList = () => {
  return (
    <div className="px-8 pt-20 pb-24 w-full bg-light-grey-transparent h-full flex flex-col items-center">
      <p className="font-poppins font-normal text-base text-grey uppercase flex gap-x-3 items-center mb-3">
        Books to read
      </p>
      <TodoTableActions />

      <TodoTable />
    </div>
  );
};

export default TodoList;
