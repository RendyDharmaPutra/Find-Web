type InputContainerProps = {
  name: string;
  label: string;
  error: string[] | null;
  children: React.ReactNode;
};

export const InputContainer: React.FC<InputContainerProps> = (props) => {
  return (
    <div className="relative flex flex-col ">
      <label
        htmlFor={`#${props.name}`}
        className="mb-1.5 font-medium text-sm text-primaryTxt"
      >
        {props.label}
      </label>
      {props.children}
      {props.error && <p className="mt-1 text-xs text-danger">{props.error}</p>}
    </div>
  );
};
