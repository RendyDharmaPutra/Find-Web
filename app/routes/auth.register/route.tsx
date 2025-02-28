import { ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { RegisterForm } from "~/features/auth/components/form/register_form";
import { getRegisterData } from "~/features/auth/hooks/get_register_data";
import { AuthActionType } from "~/features/auth/type/action/auth_action_type";
import { RegisterValidationType } from "~/features/auth/type/action/form_validation_type";
import { isFailedPostRegister } from "~/features/auth/type/api/post_register_typeguard";
import { postAuth } from "~/features/auth/utils/post_auth";
import { RegisterSchema } from "~/features/auth/utils/validation/register_validation";

export default function Register() {
  const response = useActionData<typeof action>();

  const validateError = response?.error?.validation;

  return (
    <AuthPage
      title="Halaman Registrasi"
      route="login"
      question="Sudah punya akun"
      text="Login di sini"
      response={response}
    >
      <RegisterForm errors={validateError} />
    </AuthPage>
  );
}

export async function action({
  request,
}: ActionFunctionArgs): Promise<AuthActionType<RegisterValidationType>> {
  const body = await request.formData();

  const data = getRegisterData(body);

  const validate = RegisterSchema.safeParse(data);

  if (!validate.success) {
    const validateError = validate.error?.flatten().fieldErrors;

    return {
      status: "Failed",
      error: {
        validation: validateError!,
        message: "Kesalahan pada validasi input",
      },
      message: "Terjadi Kesalahan",
    };
  }

  const response = await postAuth("register", data);

  if (isFailedPostRegister(response)) {
    const result: AuthActionType = {
      status: response.status,
      message: response.message,
    };

    if (response.error.includes("username"))
      return {
        ...result,
        error: {
          validation: {
            Username: [response.error],
          },
          message: "Terjadi Kesalahan pada validasi input",
        },
      };

    return {
      ...result,
      error: {
        message: response.error,
      },
    };
  }

  return {
    status: response.status,
    message: response.message,
  };
}
