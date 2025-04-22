import LandingPage from "@/src/pages/LandingPage";
import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { selectAuthUser } from "@/src/state/shared/auth";
import LoginPage from "@/src/pages/LoginPage";

function App() {
  const { isAuthenticated } = useAppSelector(selectAuthUser);

  return isAuthenticated ? <LandingPage /> : <LoginPage />;
}

export default App;
