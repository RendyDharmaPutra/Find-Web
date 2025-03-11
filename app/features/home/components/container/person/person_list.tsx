import { PersonCard } from "../../card/person_card";
import { PersonType } from "../../../type/person_type";

type PersonListProps = {
  person: PersonType[];
};

export const PersonList: React.FC<PersonListProps> = (props) => {
  console.log(props.person);

  return (
    <section className="flex flex-col w-full h-full overflow-y-auto">
      {props.person.map((person) => (
        <PersonCard person={person} />
      ))}
    </section>
  );
};
