import { authCookies } from "./auth_cookies";

export const getTokenCookie = async (request: Request) => {
  const cookieString = request.headers.get("Cookie");
  let token = await authCookies.parse(cookieString);

  return token;
};
