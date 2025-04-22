import UserActions from "@/src/components/shared/partials/UserActions";
import { useAppSelector } from "@/src/state/redux-hooks/reduxHooks";
import { selectAuthUser } from "@/src/state/shared/auth";

const Header = () => {
  const { isAuthenticated } = useAppSelector(selectAuthUser);

  return (
    <header className="fixed flex space-between top-0 w-full px-8 justify-between py-3 border-b-1 border-b-lighy-grey border-solid bg-white">
      <h1 className="font-poppins font-normal text-2xl text-black">BARAKA</h1>
      {isAuthenticated && <UserActions />}
    </header>
  );
};

export default Header;
