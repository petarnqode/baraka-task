import { TaskStatusEnum } from "@/src/enum";

interface TodoTableStatusProps {
  status: TaskStatusEnum;
}

const TodoTableStatus = ({ status }: TodoTableStatusProps) => {
  switch (status) {
    case TaskStatusEnum.ACTIVE:
      return (
        <p className="font-poppins bg-light-blue-transparent border-1 border-solid border-blue flex items-center justify-center rounded-xs text-blue text-sm h-7 px-2">
          {status}
        </p>
      );

    case TaskStatusEnum.COMPLETED:
      return (
        <p className="font-poppins bg-green-transparent border-1 border-solid border-green flex items-center justify-center rounded-xs text-green text-sm h-7 px-2">
          {status}
        </p>
      );
  }
};

export default TodoTableStatus;
