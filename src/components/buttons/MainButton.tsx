import { MouseEventHandler } from "react";

type MainButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
};

const MainButton = ({ text, onClick }: MainButtonProps) => {
  return (
    <button
      type="button"
      className="font-popins flex items-center gap-x-1 relative py-2 px-6 text-sm rounded-xxl-plus text-white bg-green hover:text-green hover:bg-white border-green border-1 border-solid"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
