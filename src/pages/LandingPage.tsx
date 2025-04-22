import TodoList from "@/src/components/todos/TodoList";
import MainLayout from "@/src/layout/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
      <TodoList />
    </MainLayout>
  );
};

export default LandingPage;
