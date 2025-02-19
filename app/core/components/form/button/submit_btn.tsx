type SubmitBtnProps = {
  label: string;
  width: string;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  return (
    <button
      type="submit"
      className={`px-3 py-4 flex justify-center items-center w-${props.width} rounded-medium bg-primary hover:bg-secondary active:bg-primary duration-300`}
    >
      <p className="font-semibold text-base text-primaryBG">{props.label}</p>
    </button>
  );
};
