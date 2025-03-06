import { ProfileCard } from "../card/profile_card";

type HomeProfileProps = {};

export const HomeProfile: React.FC<HomeProfileProps> = (props) => {
  return (
    <section className="flex flex-col w-full h-[72px] bg-red-500">
      <ProfileCard />
    </section>
  );
};
