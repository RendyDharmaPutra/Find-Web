import { TextBox } from "~/core/components/form/input/text_box";
import { AuthForm } from "../container/auth_form";

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <AuthForm>
      <TextBox label="Username" name="username" type="text" />
      <TextBox label="Password" name="password" type="password" />
    </AuthForm>
  );
};
