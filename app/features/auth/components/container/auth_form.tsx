import { SubmitBtn } from "~/core/components/form/button/submit_btn";

type AuthFormProps = {
  children: React.ReactNode;
};

export const AuthForm: React.FC<AuthFormProps> = (props) => {
  return (
    <div className="flex flex-col items-center gap-8 w-full ">
      <div className="flex flex-col gap-4 w-full ">{props.children}</div>
      <SubmitBtn label="Masuk" width="full" />
    </div>
  );
};
