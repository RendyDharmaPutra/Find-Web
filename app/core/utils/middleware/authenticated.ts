import { redirect } from "@remix-run/react";
import { getTokenCookie } from "../cookie/get_token";

export const authenticated = (requesst: Request) => {
  const token = getTokenCookie(requesst);

  if (!token) {
    return redirect("/auth/login");
  }
};
