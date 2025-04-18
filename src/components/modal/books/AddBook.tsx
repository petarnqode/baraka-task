import InputText from "@/src/components/input/InputText";
import { TaskStatusEnum } from "@/src/enum";
import { useAppDispatch } from "@/src/state/redux-hooks/reduxHooks";
import { addNewTodo } from "@/src/state/shared/todos";
import { useCallback, useEffect, useState } from "react";
import MainButton from "@/src/components/buttons/MainButton";
import { removeModal } from "@/src/state/shared/modals";
import customToast from "@/src/components/shared/Toast";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddBook = useCallback(() => {
    setInputText("");
    if (inputText) {
      dispatch(
        addNewTodo({
          id: uuidv4(),
          name: inputText,
          status: TaskStatusEnum.ACTIVE,
          dueDate: new Date(),
        })
      );
      customToast.success("Book is added");
      dispatch(removeModal());
    }
  }, [inputText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4 mt-6">
      <InputText
        label="Book name"
        name="bookName"
        placeholder="Enter book name"
        onChange={handleChange}
        value={inputText}
      />

      <div className="flex justify-center">
        <MainButton text="Submit" onClick={handleAddBook} />
      </div>
    </div>
  );
};

export default AddBook;
