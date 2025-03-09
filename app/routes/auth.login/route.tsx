import { ActionFunctionArgs, TypedResponse } from "@remix-run/node";
import { redirect, useActionData } from "@remix-run/react";
import { AuthPage } from "~/features/auth/components/layout/auth_page";
import { LoginForm } from "~/features/auth/components/form/login_form";
import { getLoginData } from "~/features/auth/hooks/get_login_data";
import { AuthActionType } from "~/features/auth/type/action/auth_action_type";
import { LoginValidationType } from "~/features/auth/type/action/form_validation_type";
import { isFailedPostRegister } from "~/features/auth/type/api/post_register_typeguard";
import { postAuth } from "~/features/auth/utils/post_auth";
import { authCookies } from "~/core/utils/cookie/auth_cookies";

export default function Login() {
  const response = useActionData<typeof action>();

  const validateError = response?.error?.validation;

  return (
    <AuthPage
      title="Halaman Login"
      route="register"
      question="Belum punya akun"
      text="Daftar di sini"
      response={response}
    >
      <LoginForm errors={validateError} />
    </AuthPage>
  );
}

export async function action({
  request,
}: ActionFunctionArgs): Promise<
  AuthActionType<LoginValidationType> | TypedResponse<never>
> {
  const body = await request.formData();

  const data = getLoginData(body);

  const response = await postAuth("login", data);

  if (isFailedPostRegister(response)) {
    const result: AuthActionType = {
      status: response.status,
      message: response.message,
    };

    if (response.error.includes("username")) {
      return {
        ...result,
        error: {
          validation: {
            Username: [response.error],
          },
          message: "Akun tidak valid",
        },
      };
    } else if (response.error.includes("password")) {
      return {
        ...result,
        error: {
          validation: {
            Password: [response.error],
          },
          message: "Akun tidak valid",
        },
      };
    }

    return {
      ...result,
      error: {
        message: response.error,
      },
    };
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await authCookies.serialize(response.data?.token),
    },
  });
}
