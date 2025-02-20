import { TextBox } from "~/core/components/form/input/text_box";
import { AuthForm } from "../container/auth_form";
import { PwdBox } from "~/core/components/form/input/pwd_box";

type RegisterFormProps = {};

export const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <AuthForm>
      <TextBox label="Nama Lengkap" name="fullname" type="text" />
      <TextBox label="Username" name="username" type="text" />
      {/* <TextBox label="Password" name="password" type="password" /> */}
      <PwdBox label="Password" name="password" />
    </AuthForm>
  );
};
