import { type LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { useMediaQuery } from "react-responsive";
import { authenticated } from "~/core/utils/middleware/authenticated";
import { HomeLayout } from "~/features/home/components/layout/home_layout";
import { PersonType } from "~/features/home/type/person_type";
import { ProfileType } from "~/features/home/type/profile_type";
import { getHome } from "~/features/home/utils/get_home";

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticated(request);

  const personResponse = await getHome<{ persons: PersonType[] }>(
    request,
    "/person/"
  );
  const person = personResponse.data?.persons;

  const profileResponse = await getHome<{ profile: ProfileType }>(
    request,
    "/auth/profile"
  );
  const profile = profileResponse.data?.profile;

  console.log(person);
  console.log(profile);

  return {
    person,
    profile,
  };
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
