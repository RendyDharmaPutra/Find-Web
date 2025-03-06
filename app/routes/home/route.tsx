import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ApiEnv } from "~/core/utils/get_env";
import { authCookies } from "~/features/auth/utils/auth_cookies";
import { HomeLayout } from "~/features/home/components/layout/home_layout";

export async function loader({ request }: LoaderFunctionArgs) {
  const api_url = ApiEnv();

  const cookieString = request.headers.get("Cookie");
  let token = await authCookies.parse(cookieString);

  if (!token) {
    return redirect("/auth/login");
  }

  const response = await fetch(`${api_url}/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return redirect("/auth/login");
  }

  const result = await response.json();
  console.log(result);

  return {};
}

export default function Index() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const location = useLocation();

  return (
    <>
      {isDesktop ? (
        <main className="flex flex-row w-full h-screen bg-red-500">
          <aside className="w-[480px] h-full bg-primaryBG">
            <HomeLayout />
          </aside>
          <section className="flex-1 h-full bg-blue-500">
            <Outlet />
          </section>
        </main>
      ) : location.pathname === "/home" ? (
        <main className="w-full h-screen bg-red-500">
          <aside className="w-full h-full bg-primaryBG">
            <HomeLayout />
          </aside>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
