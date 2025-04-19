import Header from "@/src/components/shared/Header";
import Footer from "@/src/components/shared/Footer";
import TodoList from "@/src/components/todos/TodoList";

const LandingPage = () => {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};

export default LandingPage;
