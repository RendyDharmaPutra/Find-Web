import { redirect } from "@remix-run/react";
import { getTokenCookie } from "../cookie/get_token";

export const authenticated = async (request: Request) => {
  const token = await getTokenCookie(request);

  if (!token) {
    throw redirect("/auth/login");
  }
};
