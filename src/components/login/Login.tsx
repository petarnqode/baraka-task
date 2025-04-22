import InputText from "@/src/components/input/InputText";
import MainButton from "@/src/components/buttons/MainButton";
import { ChangeEventHandler, useCallback, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@/src/state/redux-hooks/reduxHooks";
import { DEFAULT_USER } from "@/src/constants/user";
import { selectAuthUser, setUserData } from "@/src/state/shared/auth";

const Login = () => {
  const dispatch = useAppDispatch();
  const [isErrorMessageShown, setIsErrorMessageShown] =
    useState<boolean>(false);
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setIsErrorMessageShown(false);
      setForm((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    },
    []
  );

  const handleLogin = useCallback(() => {
    if (
      form.email === DEFAULT_USER.email &&
      form.password === DEFAULT_USER.password
    ) {
      dispatch(setUserData(DEFAULT_USER));
    } else {
      setIsErrorMessageShown(true);
    }
  }, [form]);

  return (
    <div className="px-8 pt-20 pb-24 w-full bg-light-grey-transparent h-full flex flex-col items-center">
      <p className="font-poppins font-normal text-base text-grey uppercase flex gap-x-3 items-center mb-3">
        Log in
      </p>

      <div className="w-full md:w-1/2 bg-white rounded-sm border-1 border-light-grey-alt border-solid p-6 overflow-hidden flex flex-col gap-6">
        <InputText
          label="Email"
          name="email"
          placeholder="Enter email"
          onChange={handleInputChange}
          value={form.email}
        />

        <InputText
          label="Password"
          name="password"
          placeholder="Enter password"
          onChange={handleInputChange}
          value={form.password}
        />

        {isErrorMessageShown && (
          <p className="font-poppins font-normal text-xs text-red uppercase flex gap-x-3 items-center mb-3">
            Wrong credentials
          </p>
        )}

        <div className="flex justify-center">
          <MainButton text="Submit" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
