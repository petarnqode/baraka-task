import { toast } from "react-toastify";
import {
  SuccessIcon,
  WarrningIcon,
  ErrorIcon,
  QuestionIcon,
} from "@/src/components/icons/toast";

toast.success = (message) => {
  return toast(
    <div className="bg-green flex gap-x-2 items-center px-4 py-2 rounded-sm border-1 border-green border-solid">
      <SuccessIcon type="Success" className="flex-shrink-0" />
      <p className="font-poppins text-white text-sm">{String(message)}</p>
    </div>,
    {
      progressClassName: "bg-green",
      bodyClassName: "bg-green",
      className: "bg-green",
      closeButton: false,
      icon: undefined,
    }
  );
};

toast.info = (message) => {
  return toast(
    <div className="bg-blue flex gap-x-2 items-center px-4 py-2 rounded-sm border-1 border-blue border-solid">
      <QuestionIcon type="Question" className="flex-shrink-0" />
      <p className="font-poppins text-white text-sm">{String(message)}</p>
    </div>,
    {
      className: "bg-blue",
      closeButton: false,
      icon: undefined,
    }
  );
};

toast.warning = (message) => {
  return toast(
    <div className="bg-orange flex gap-x-2 items-center px-4 py-2 rounded-sm border-1 border-orange border-solid">
      <WarrningIcon className="flex-shrink-0" />
      <p className="font-poppins text-white text-sm">{String(message)}</p>
    </div>,
    {
      className: "bg-orange",
      closeButton: false,
      icon: undefined,
    }
  );
};

toast.error = (message, options) => {
  return toast(
    <div className="bg-red flex gap-x-2 items-center px-4 py-2 rounded-sm border-1 border-red border-solid">
      <ErrorIcon className="flex-shrink-0" />
      <p className="font-poppins text-white text-sm">{String(message)}</p>
    </div>,
    {
      ...options,
      className: "bg-red",
      closeButton: false,
      icon: undefined,
    }
  );
};
const customToast = toast;

export default customToast;
