import { TaskStatusEnum } from "@/src/enum";
import { MouseEventHandler } from "react";

interface TodoTableStatusProps {
  status: TaskStatusEnum;
  onClick: MouseEventHandler<HTMLParagraphElement>;
}

const TodoTableStatus = ({ status, onClick }: TodoTableStatusProps) => {
  switch (status) {
    case TaskStatusEnum.ACTIVE:
      return (
        <p
          className="cursor-pointer font-poppins bg-light-blue-transparent border-1 border-solid border-blue flex items-center justify-center rounded-xs text-blue text-sm h-7 px-2"
          onClick={onClick}
        >
          {status}
        </p>
      );

    case TaskStatusEnum.COMPLETED:
      return (
        <p
          className="cursor-pointer font-poppins bg-green-transparent border-1 border-solid border-green flex items-center justify-center rounded-xs text-green text-sm h-7 px-2"
          onClick={onClick}
        >
          {status}
        </p>
      );
  }
};

export default TodoTableStatus;
