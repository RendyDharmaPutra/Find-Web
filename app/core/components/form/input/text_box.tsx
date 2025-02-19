import { InputContainer } from "./input_container";

type TextBoxProps = {
  name: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
};

export const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <InputContainer label={props.label} name={props.name}>
      <input
        id={`#${props.name}`}
        name={props.name}
        type={props.type}
        placeholder={`Masukkan ${props.label}`}
        className="px-4 py-4 text-secondaryTxt placeholder-tertiaryTxt rounded-medium border border-secondaryBG focus:border-primary outline-none bg-secondaryBG hover:bg-tertiaryBG focus:bg-primaryBG duration-300"
      />
    </InputContainer>
  );
};
