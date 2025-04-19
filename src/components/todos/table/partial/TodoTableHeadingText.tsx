type TodoTableHeadingProps = {
  text: string;
  isCenter?: boolean;
};

const TodoTableHeadingText = ({
  text,
  isCenter = false,
}: TodoTableHeadingProps) => {
  return (
    <p
      className={`font-poppins font-medium text-sm text-grey uppercase flex gap-x-3 ${
        isCenter ? "mx-auto" : ""
      }`}
    >
      {text}
    </p>
  );
};

export default TodoTableHeadingText;
