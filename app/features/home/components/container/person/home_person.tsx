import { ApiResponseType } from "~/core/type/api_response_type";
import { PersonType } from "../../../type/person_type";
import { PersonList } from "./person_list";
import { PersonNotFound } from "./person_not_found";

type HomePersonProps = {
  person: ApiResponseType<{ person: PersonType[] }>;
};

export const HomePerson: React.FC<HomePersonProps> = (props) => {
  const person = props.person;
  return (
    <section className="flex-1 w-full overflow-y-hidden">
      {person.status === "Success" ? (
        <PersonList person={person.data!.person} />
      ) : (
        <PersonNotFound message={person.message} description={person.error!} />
      )}
    </section>
  );
};
