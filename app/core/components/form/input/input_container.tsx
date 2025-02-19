type InputContainerProps = {
  name: string;
  label: string;
  children: React.ReactNode;
};

export const InputContainer: React.FC<InputContainerProps> = (props) => {
  return (
    <div className="flex flex-col ">
      <label
        htmlFor={`#${props.name}`}
        className="mb-1.5 font-medium text-sm text-primaryTxt"
      >
        {props.label}
      </label>
      {props.children}
      <p className="mt-1 text-xs text-danger">Error Message</p>
    </div>
  );
};
