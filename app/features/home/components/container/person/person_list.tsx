import { PersonCard } from "../../card/person_card";
import { PersonType } from "../../../type/person_type";

type PersonListProps = {
  person: PersonType[];
  query: string;
};

export const PersonList: React.FC<PersonListProps> = (props) => {
  const person = props.query
    ? props.person.filter((person) => person.fullname.includes(props.query))
    : props.person;

  return (
    <section className="flex flex-col w-full h-full overflow-y-auto">
      {person.map((person) => (
        <PersonCard person={person} />
      ))}
    </section>
  );
};
