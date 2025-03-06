import { PersonCard } from "../card/person_card";

type HomePersonProps = {};

export const HomePerson: React.FC<HomePersonProps> = (props) => {
  return (
    <section className="flex-1 flex flex-col w-full h-full overflow-y-scroll">
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
    </section>
  );
};
