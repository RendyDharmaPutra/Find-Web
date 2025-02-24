import { ApiEnv } from "~/core/utils/get_env";
import { LoginFormType, RegisterFormType } from "../type/auth_form_type";
import {
  FailedPostRegisterType,
  SuccessPostRegisterType,
} from "../type/api/post_register_type";

export const postAuth = async (
  route: "register" | "login",
  data: LoginFormType | RegisterFormType
): Promise<SuccessPostRegisterType | FailedPostRegisterType> => {
  const api_url = ApiEnv();

  try {
    const rawResponse = await fetch(`${api_url}/auth/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response: SuccessPostRegisterType | FailedPostRegisterType =
      await rawResponse.json();

    return response;
  } catch (error) {
    const errorMessage = `${error}`;

    return {
      status: "Failed",
      message: "Terjadi Kesalahan",
      error: errorMessage,
    };
  }
};
