import { AuthForm } from "../container/auth_form";

type RegisterFormProps = {
  children: React.ReactNode;
};

export const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <AuthForm>
      <h6>Hello</h6>
      <h6>Hello</h6>
    </AuthForm>
  );
};
