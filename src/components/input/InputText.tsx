interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  label: string;
  name: string;
  value?: string;
}
const InputText = ({
  onChange,
  value,
  name,
  placeholder,
  label,
}: InputProps) => {
  return (
    <div className="flex flex-col relative  ">
      <div className="absolute bg-white left-3.5 top-0 -translate-y-2/4 px-1 z-1 ">
        <div className="flex gap-x-1 items-center">
          <label htmlFor="address" className="font-poppins text-black text-xs">
            {label}
            <span className="text-red">*</span>
          </label>
        </div>
      </div>
      <input
        onChange={onChange}
        value={value}
        autoComplete="off"
        name={name}
        type="text"
        placeholder={placeholder}
        className="font-poppins bg-white border-1 border-grey border-solid text-sm text-black placeholder:text-text-grey py-3.5 px-4 focus:ring-green focus:border-green focus:outline-none focus-visible:ring-green block w-full rounded-xs"
      />
    </div>
  );
};

export default InputText;
