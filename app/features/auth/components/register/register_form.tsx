import { TextBox } from "~/core/components/form/input/text_box";
import { AuthForm } from "../container/auth_form";
import { PwdBox } from "~/core/components/form/input/pwd_box";

type RegisterFormProps = {
  errors:
    | {
        Fullname?: string[] | undefined;
        Username?: string[] | undefined;
        Password?: string[] | undefined;
      }
    | null
    | undefined;
};

export const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  return (
    <AuthForm>
      <TextBox
        label="Nama Lengkap"
        name="fullname"
        type="text"
        error={props.errors?.Fullname || null}
      />
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
