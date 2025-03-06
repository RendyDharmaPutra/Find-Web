import { HomeHeader } from "../container/header/home_header";
import { HomeList } from "../container/home_list";
import { HomeProfile } from "../container/home_profile";

type HomeLayoutProps = {};

export const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  return (
    <section className="flex flex-col w-full h-full">
      <HomeHeader />
      <HomeList />
      <HomeProfile />
    </section>
  );
};
