import { ApiResponseType } from "~/core/type/api_response_type";
import { getTokenCookie } from "~/core/utils/cookie/get_token";
import { ApiEnv } from "~/core/utils/get_env";

export const getHome = async <T>(
  requesst: Request,
  route: "/person/" | "/auth/profile"
): Promise<ApiResponseType<T>> => {
  const api_url = ApiEnv();

  const token = await getTokenCookie(requesst);

  try {
    const rawResponse = await fetch(`${api_url}${route}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const response: ApiResponseType<T> = await rawResponse.json();

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
