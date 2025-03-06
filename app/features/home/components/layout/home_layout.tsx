import { HomeHeader } from "../container/header/home_header";
import { HomePerson } from "../container/person/home_person";
import { HomeProfile } from "../container/home_profile";

type HomeLayoutProps = {};

export const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  return (
    <section className="flex flex-col w-full h-full">
      <HomeHeader />
      <HomePerson />
      <HomeProfile />
    </section>
  );
};
