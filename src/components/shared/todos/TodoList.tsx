import TodoTable from "@/src/components/shared/todos/table/TodoTable";

const TodoList = () => {
  return (
    <div className="px-8 py-6 w-full bg-light-grey-transparent h-full flex flex-col items-center">
      <p className="font-popins font-normal text-base text-grey uppercase flex gap-x-3 items-center mb-3">
        Books to read
      </p>
      <TodoTable />
    </div>
  );
};

export default TodoList;
