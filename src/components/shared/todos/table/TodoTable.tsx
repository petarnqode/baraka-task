import TodoTableHeader from "@/src/components/shared/todos/table/partial/TodoTableHeader";

const TodoTable = () => {
  return (
    <div className="w-full bg-white rounded-sm border-1 border-light-grey-alt border-solid p-6">
      <TodoTableHeader />
    </div>
  );
};

export default TodoTable;
