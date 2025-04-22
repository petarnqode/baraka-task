import { Logout, User } from "@/src/components/icons/general";
import { useAppDispatch } from "@/src/state/redux-hooks/reduxHooks";
import { removeUserData } from "@/src/state/shared/auth";

const UserActions = () => {
  const dispatch = useAppDispatch();

  const handleLogut = () => {
    dispatch(removeUserData());
  };

  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={handleLogut}
    >
      <User />
      <Logout className="cursor-pointer" />
    </div>
  );
};

export default UserActions;
