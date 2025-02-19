type AuthHeadlineProps = {
  title: string;
};

export const AuthHeadline: React.FC<AuthHeadlineProps> = (props) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <h3 className="text-center font-bold text-[32px] leading-9 text-primary">
        {props.title}
      </h3>
    </div>
  );
};
