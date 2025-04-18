import TodoTableHeadingText from "@/src/components/shared/todos/table/partial/TodoTableHeadingText";

const TodoTableHeader = () => {
  return (
    <div className="grid grid-cols-4 border-b-1 border-b-light-grey-alt border-solid px-4 pb-3 pt-4">
      <TodoTableHeadingText text="Book" />
      <TodoTableHeadingText text="Date" />
      <TodoTableHeadingText text="Status" isCenter />
      <TodoTableHeadingText text="Actions" />
    </div>
  );
};

export default TodoTableHeader;
