import { TextBox } from "~/core/components/form/input/text_box";
import { AuthForm } from "../container/auth_form";
import { PwdBox } from "~/core/components/form/input/pwd_box";

type LoginFormProps = {
  errors?:
    | {
        Username?: string[] | undefined;
        Password?: string[] | undefined;
      }
    | undefined;
};

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <AuthForm>
      <TextBox
        label="Username"
        name="username"
        type="text"
        error={props.errors?.Username || null}
      />
      <PwdBox label="Password" name="password" error={props.errors?.Password} />
    </AuthForm>
  );
};
