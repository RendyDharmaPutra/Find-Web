import { ApiEnv } from "~/core/utils/get_env";
import { AuthFormType } from "../type/auth_form_type";

export const postAuth = async (
  route: "register" | "login",
  data: AuthFormType
) => {
  const api_url = ApiEnv();

  try {
    const rawResponse = await fetch(`${api_url}/auth/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await rawResponse.json();

    console.log(response);

    return response;
  } catch (error) {
    const errorMessage = `error : ${error}`;

    console.error(`error : ${errorMessage}`);
    throw errorMessage;
  }
};
